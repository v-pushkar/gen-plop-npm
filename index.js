const path = require('path');
const fs = require("fs")


const genCreator = (templates, tplFolder, plop)=>{
/**
 * The function retrn arr with file names
 * 
 * @param {string} tplsFolder folder with templates
 * @returns {Array} return array with file names
 * 
 */
    const getFilesNames = (tplsFolder)=>(fs.readdirSync(path.join(__dirname,tplFolder,tplsFolder)))
/**
 * The function check, names argument. If it sring(folder name), call to func getFilesNames and return arr of file names
 * 
 * @param {string,array} names name of folder or arr of files names
 * @returns {Array} return array with file name/s
 * 
 */
    const getFilesForActions = (names)=>{
        if(typeof names === "string"){
          return getFilesNames(names)
        }
        return names
      }

      /**
       * Function chack template file name and return chandgen name (template => name)
       * @param {string} filename name from prompt input
       * @param {object} data object with inputed date from prompts
       * @returns {Array} return array of names
       */
      const changeFileName =  (filename, data)=>{ 
        const {name, Name, NAME}  = data    
        if(filename.indexOf("Template")){
            return filename.replace('Template', Name)
        }
        if(filename.indexOf("template")){
            return filename.replace('template', name)
        }
        if(filename.indexOf("TEMPLATE")){
            return filename.replace('TEMPLATE', NAME)
        }
        return filename
      }

      /**
       * Function for create actions
       * @param {object} data object with inputed date from prompts
       * @param {string} type prompt type
       * @param {object} options optionc for actions
       * @returns {arr} array of actions
       */
      const actionsCreator = (data,type, options) =>{    
        data.Name = data.name.charAt(0).toUpperCase()+data.name.slice(1)
        data.NAME = data.name.toUpperCase()
        const {destPath, templatesPath, files} = options;
        const path = data.path? `${data.path}/${data.name}/` : `${destPath}/${data.name}/`;
        const templatePath = data.other_template ? `${templatesPath}${data.other_template}/`:templatesPath;
        const tplFiles = data.other_template? files[data.other_template]:files;   
        const actions = getFilesForActions(tplFiles).map(i=>{
          
            return {
                type,
                path:path+changeFileName(i, data),
                templateFile: templatePath+i,
            }
        })
        return actions
       
    }
    return Object.keys(templates).forEach(key=>{
        const {description, prompts}=templates[key]
        plop.setGenerator(key, {
            description,
            prompts,
        actions: data=>actionsCreator(data, "add", {...templates[key]})   
                   
        })
    })   

}

module.exports = genCreator
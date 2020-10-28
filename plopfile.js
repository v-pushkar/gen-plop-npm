'use strict';
const templates = require("./plop-templates")
const path = require('path');
const fs = require("fs")
const tplFolder = "plop-templates"


const getFilesNames = (tplsFolder)=>(fs.readdirSync(path.join(__dirname,tplFolder,tplsFolder)))

  const getFilesForActions = (names)=>{
    if(typeof names === "string"){
      return getFilesNames(names)
    }
    return names
  }

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
module.exports = function (plop) {    
    Object.keys(templates).forEach(key=>{
        const {description, prompts}=templates[key]
        plop.setGenerator(key, {
            description,
            prompts,
        actions: data=>actionsCreator(data, "add", {...templates[key]})   
                   
        })
    })   
   
};
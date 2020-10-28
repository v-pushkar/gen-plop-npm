'use strict';
const path = require('path');
const fs = require("fs")
const tplFolder = "plop-templates"

const getFilesNames = (tplsFolder)=>(fs.readdirSync(path.join(__dirname,tplFolder,tplsFolder)))

const templates = {
    view_component:{
        description: "craeate view component",
        prompts:[
            {
                type: "list",
                name: "other_template",
                message: "What type of component do you want create?",
                choices: ["templateDetails","templatesForm", "templatesList"],
                
              },
            {
                type: "input",
                name: "name",
                message: "Input the name for redux module:",
                validate: (input) => Boolean(input.length > 2),
              },
              {
                type: "input",
                name: "path",
                message: "Input path for new files (optional):",       
              }
        ],
      files:{
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],        
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],        
        templatesForm:["CreateNewTemplate.tsx","CreateNewTemplate.unit.test.tsx","EditTemplate.tsx","EditTemplate.unit.test.tsx","styles.ts","TemplatesForm.tsx","TemplatesForm.unit.test.tsx","utils.ts"],
        templatesList:["columns.tsx","styles.ts"],

      },
      destPath:"src/views/Сomponents/",
      templatesPath:"plop-templates/views/components/"
    },
    views_container:{
        description: 'create view component container',
        prompts:[
            {
                type: "input",
                name: "name",
                message: "Input the name for redux module:",
                validate: (input) => Boolean(input.length > 2),
              },
              {
                type: "input",
                name: "path",
                message: "Input path for new files (optional):",       
              }
        ],
      files:["Templates.tsx"],    
      destPath:"src/views/Сontainers/",
      templatesPath:"plop-templates/views/containers/"
    },
 
    redux_store:{
        description: 'create redux components',
        prompts:[
            {
                type: "input",
                name: "name",
                message: "Input the name for redux module:",
                validate: (input) => Boolean(input.length > 2),
              },
              {
                type: "input",
                name: "path",
                message: "Input path for new files (optional):",       
              }
        ],
      files:"store",
      // files:["actions.ts", "actions.unit.test.ts", "index.ts", "mockedData.ts","reducer.ts","reducer.unit.test.ts","saga.ts","saga.unit.test.ts","types.ts","utils.ts"],
      destPath:"src/store/",
      templatesPath:"plop-templates/store/"
    }
  
  }

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
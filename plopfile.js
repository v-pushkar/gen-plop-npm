'use strict';
const path = require('path');
const fs = require("fs")

const templates = {
    view_component:{
        description: 'create view component',
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
      files:["component.ts"],
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
      files:["view.js", "test.js"],
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
      files:["actions.ts", "actions.unit.test.ts", "index.ts", "mockedData.ts","reducer.ts","reducer.unit.test.ts","saga.ts","saga.unit.test.ts","types.ts","utils.ts"],
      destPath:"src/store/",
      templatesPath:"plop-templates/store/"
    }
  
  }

  const actionsCreator = (data,type, options) =>{    
    data.Name = data.name.charAt(0).toUpperCase()+data.name.slice(1)
    data.NAME = data.name.toUpperCase()
    const {destPath, templatesPath, files} = options;
    const path = data.path? `${data.path}/${data.name}/` : `${destPath}/${data.name}/`;
    
    const actions = files.map(i=>{
        return {
            type,
            path:path+i,
            templateFile: templatesPath+i,
        }
    })
    return actions
   
}



module.exports = function (plop) {
    // controller generator

    Object.keys(templates).forEach(key=>{
        const {description, prompts}=templates[key]
        plop.setGenerator(key, {
            description,
            prompts,
        actions: data=>actionsCreator(data, "add", {...templates[key]})    
       
            
        })
    })    
   
};
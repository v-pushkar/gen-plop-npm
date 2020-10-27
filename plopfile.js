'use strict';
const path = require('path');
const fs = require("fs")

const templates = {
    view_component:{
      files:["component.js"],
      destPath:"src/views/Components",
      templatesPath:"/views/components"
    },
    views_container:{
      files:["view.js", "test.js"],
      destPath:"src/views/Components",
      templatesPath:"/views/components"
    },
    components:{
      files:[ "view.js"],
      destPath:"src/views/Components",
      templatesPath:"/components"
    },
    store:{
      files:["actions.ts", "actions.unit.test.ts", "index.js"],
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
            path,
            templateFile: templatesPath+i,
        }
    })
    return actions
   
}



module.exports = function (plop) {
    // controller generator

    
    plop.setGenerator('views', {
        description: 'create view component',
        prompts: [
            {
                type: "list",
                name: "type",
                message: "What do you want create?",
                choices: ["components","container"],
                
              },
            {
            type: "input",
            name: "name",
            message: "Input the name for this module:",
            validate: (input) => Boolean(input.length > 2),
          },
          {
            type: "input",
            name: "path",
            message: "Input path for new files (optional):",       
          }],

        actions: data =>{    
            data.Name = data.name.charAt(0).toUpperCase()+data.name.slice(1)
            data.NAME = data.name.toUpperCase()
            if(data.path){
                return [{
                    type: 'add',
                    path: `{{path}}/{{type}}/{{name}}/{{name}}.js`,
                    templateFile: 'plop-templates/views/{{type}}/component.ts'
                }]

            }
            else{
                return [{
                    type: 'add',
                    path: `src/{{type}}/{{name}}/{{name}}.ts`,
                    templateFile: 'plop-templates/views/{{type}}/component.ts'
                }]
            }
        }
    });
    

    plop.setGenerator('redux-store', {
        description: 'create redux store files',
        prompts: [
           
            {
                type: "input",
                name: "name",
                message: "Input the name for this module:",
                validate: (input) => Boolean(input.length > 2),
              },
              {
                type: "input",
                name: "path",
                message: "Input path for new files (optional):",       
              }
    ],
    actions: data=>actionsCreator(data, "add", {...templates.store})


   
        
    });
    plop.setGenerator('component', {
        description: 'create component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'plop-templates/controller.ts'
        }]
    });
};
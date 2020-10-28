

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
      destPath:"src/store/",
      templatesPath:"plop-templates/store/"
    }
  
  };
  
module.exports = templates
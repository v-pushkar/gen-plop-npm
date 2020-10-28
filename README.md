# generator with plop

generator for build new files with   [plopjs](https://plopjs.com/)

Add plop to your project

### `npm install --save-dev plop`

or

### `yarn add plop`

App temlates to you project (folder: plop-templates)

Create / add a plopfile.js at the root of your project </b>

Add comand to scripts in package.json </br>

// package.json
{
...,
"scripts": {
"plop": "plop"
},
...
}

run:

### `yarn run plop`



## Howe create templates obj:

create object looks like this: </b>
```javascript
const templates = {
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
}
```
`other_template` example :

```javascript
 prompts:[
            {
                type: "list",
                name: "other_template",
                message: "What type of component do you want create?",
                choices: ["templateDetails","templatesForm", "templatesList"],
                
              }
              ...
              files:{
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],        
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],        
        templatesForm:["CreateNewTemplate.tsx","CreateNewTemplate.unit.test.tsx","EditTemplate.tsx","EditTemplate.unit.test.tsx","styles.ts","TemplatesForm.tsx","TemplatesForm.unit.test.tsx","utils.ts"],
        templatesList:["columns.tsx","styles.ts"],

      }
      ...
```

`files` variants for add templates files to generator : </b>

if use "other_template" option:
```javascript
        
        
              files:{
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],        
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],   
           }
    
```

if add just folder with templates:</b>
```javascript
    
    files:"templatefolder"
```
if add arr with template files:</b>

```javascript
    
    files:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"]
```
every element in object it will be new option for select. List of selections well be created with keys in this obj </b>

element | type | description
--------| -----|-------
description | {string} | description for actions
prompts | {Arr} | array of prompts more info about propmpt options [inquirer.js](https://github.com/SBoudrias/Inquirer.js#inquirerregisterpromptname-prompt)
files | {string},{arr},{obj} | if string - name of folder with templates (automatically detected files in folder with fs()); arr - list of templates files; obj - if use option with subfolders with templates - `other_template`
 destPath | {string} | folder for new files by default
 templatesPath | {string} | path of folder with templates (if using `other_template`, only parent folder)

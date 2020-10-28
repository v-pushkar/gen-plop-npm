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

create object looks like this: 
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

every element in object it will be new option for select. List of selections well be created with keys in this obj </b>

element | type | description
--------| -----|-------

description | {string} | description for actions
prompts | {Arr} | array of prompts more info about propmpt options [inquirer.js](https://github.com/SBoudrias/Inquirer.js#inquirerregisterpromptname-prompt)
 

# generator with plop

generator for build new files with [plopjs](https://plopjs.com/)

Add generator to your project

### `npm install generator-plop-tt`

<br/>

Add temlates to you project <br/>

use {{name}},{{Name}}, {{NAME}} in you template files for add nemes<br/>
if you get a conflict with other brackets in code, use buckspace for separate bracets:<br/>
const any = {any1, {{name}}} - get a conflict <br/>
const any = {any1, {{name}} } - fix conflict <br/>
<br/>
`file name` - if your template file include "template" it well be changed to "name".<br/>
example:
if in prompt was inputted name "user", gets <br/>
reducerTemplate.js --> reducerUser.js
<br/>
<br/>

Create / add a `plopfile.js` at the root of your project <br/>
add to file templates creator data, and generator function. Yoy can use any names and folders<br/>

plopfile.js:

```javascript
"use strict";
const templates = require("./plop-templates");
const genCreatot = require("generator-plop-tt");
const tplFolder = "plop-templates";

module.exports = function (plop) {
  genCreatot(templates, tplFolder, plop);
};
```

Add comand to scripts in package.json <br/>

// package.json
<br/>

```javascript

"scripts": {
"plop": "plop"
}

```

run generator with plop:

### `npm run plop`

<br/>
if plop installed globally with `npm install -g plop`, use short command `plop`<br/>

## Howe create templates obj:

create object looks like this: </b>
every element in object it will be new option for select. List of selections well be created with keys in this obj <br/>

```javascript
const templates = {
  views_container: {
    description: "create view component container",
    prompts: [
      // input name for new file/variables in templates files
      {
        type: "input",
        name: "name",
        message: "Input the name for redux module:",
        validate: (input) => Boolean(input.length > 2),
      },
      // input path for new files. if folder not exist, it will be created
      {
        type: "input",
        name: "path",
        message: "Input path for new files (optional):",
      },
    ],
    files: ["Templates.tsx"],
    destPath: "src/views/Сontainers/",
    templatesPath: "plop-templates/views/containers/",
  },
};
```

if you have in parent template folder child folders with different templates, add to prompt option `other_template` with choices child folders. <br/>

with `other_template` example :

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

`files` variants for add templates files to generator : <br/>

if use `other_template` option:

```javascript

              files:{
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],
        templateDetails:["ActivityItem.tsx","ActivityItem.unit.test.tsx","styles.ts","TemplateDetails.tsx", "TemplateDetails.unit.test.tsx"],
           },
           destPath:"src/components/forms",
          templatesPath:"src/templates/components/multi/"


```

if add just folder with templates:</b>

```javascript

    files:"templatefolder/",
     destPath:"src/components/forms",
      templatesPath:"src/templates/components/"
```

if add arr with template files:</b>

```javascript
files: [
  "ActivityItem.tsx",
  "ActivityItem.unit.test.tsx",
  "styles.ts",
  "TemplateDetails.tsx",
  "TemplateDetails.unit.test.tsx",
];
```

| element       | type                 | description                                                                                                                                                                                        |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description   | {string}             | description for actions                                                                                                                                                                            |
| prompts       | {Arr}                | array of prompts more info about propmpt options [inquirer.js](https://github.com/SBoudrias/Inquirer.js#inquirerregisterpromptname-prompt)                                                         |
| files         | {string},{arr},{obj} | if string - name of folder with templates (automatically detected files in folder with fs()); arr - list of templates files; obj - if use option with subfolders with templates - `other_template` |
| destPath      | {string}             | folder for new files by default                                                                                                                                                                    |
| templatesPath | {string}             | path of folder with templates (if using `other_template`, only parent folder)                                                                                                                      |

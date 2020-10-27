const Generator = require("yeoman-generator");


const files = ["actions.ts", "actions.unit.test.ts","index.ts", "reducer.ts", "mockedData.ts", "reducer.unit.test.ts", "saga.ts", "saga.unit.test.ts", "types.ts", "utils.ts"];
const path_def = "src/components"

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }
  
  async prompting() {
    this.log("Generator starting rdx... ");

    this.answers = await this.prompt([
      {
        type: "list",
        name: "type",
        message: "What do you want create?",
        choices: ["redux-module", "react component"],
        
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
        message: "Input path for module (optional):",       
      },
    ]);
  }

  
  writing() {
    this.log("Try writing files...");

    const { type, name, path } = this.answers;
    const path_name = path? path : path_def
if (type === "redux-module") {
      files.forEach((i) => {
        this.fs.copyTpl(
          this.templatePath(i),
          this.destinationPath(
            `${path_name}/${name.charAt(0).toUpperCase()+name.slice(1)}/${i}`
          ),
          {
            name,
          }
        );
      });
    }else if(type === "react component"){
      this.log(`No actions for " ${type} " yet`);
    } else {
      this.log(`No actions for you choice " ${type} ". Try again`);
    }
  }
  end() {
    this.log("...end");
  }
};

const Generator = require("yeoman-generator");

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
    files:["index.js"],
    destPath:"src/store",
    templatesPath:"/rdx"
  }

}

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  async prompting() {
    this.log("Generator component app starting... ");

    this.answers = await this.prompt([
      {
        type: "list",
        name: "type",
        message: "What do you want create?",
        choices: Object.keys(templates).map(i=>(i)),
        
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
      },
    ]);    
  }

 
  writing() {
    this.log("Writing files..."); 

    this.log("----------------------------------");    
    const { type, name, path } = this.answers;
    const Name = name.charAt(0).toUpperCase()+name.slice(1)
    const NAME = name.toUpperCase()
    const path_name = path? path : templates[type].destPath
    const template_path =(i)=> `${this.templatePath()}${templates[type].templatesPath}/${i}`;
    templates[type].files.forEach((i) => {        
      this.fs.copyTpl(  
        template_path(i),
        this.destinationPath(
          `${path_name}/${name}/${name}${i}`
        ),
        {
          name, Name, NAME
        }
      );
    });
    
  }
  end() {
    this.log("...end");
  }
};

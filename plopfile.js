'use strict';
const templates = require("./plop-templates")
const genCreatot = require('plop-generator')

const tplFolder = "plop-templates"



module.exports = function (plop) {    
    genCreatot(templates, tplFolder, plop)
   
};
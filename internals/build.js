const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const template = fs.readFileSync(path.join(__dirname, 'launch.handlebars'), 'utf-8');
const templateFunction = Handlebars.compile(template);
const html = templateFunction(require(path.join(__dirname, '../config.js')));

fs.writeFileSync(path.join(__dirname, '../public/launch.html'), html);

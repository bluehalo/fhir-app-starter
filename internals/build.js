const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const mkdirp = require('mkdirp');
const { exit } = require('process');

const template = fs.readFileSync(path.join(__dirname, 'launch.handlebars'), 'utf-8');
const templateFunction = Handlebars.compile(template);
const html = templateFunction(require(path.join(__dirname, '../config.js')));

mkdirp(path.join(__dirname, '../build')).then(() => {
  fs.writeFileSync(path.join(__dirname, '../build/launch.html'), html);
});

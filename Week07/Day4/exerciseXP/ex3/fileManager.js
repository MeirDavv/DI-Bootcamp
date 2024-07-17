const fs = require('fs');

const readFile = (filepath) => 
    fs.readFileSync(filepath,'utf-8');

const writeFile = (filepath, data) =>
    fs.writeFileSync(filepath,data,'utf-8');

module.exports = {readFile, writeFile};


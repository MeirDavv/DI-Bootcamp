const fs = require('fs');

const directoryPath = __dirname;

fs.readdir(directoryPath, function(err,files){
    if(err)
        return console.log('Unable to scan directory: ' + err);
    files.forEach(file => console.log(file));
});
const {readFile, writeFile} = require('./fileManager.js');

console.log(readFile('Hello World.txt'));
writeFile('Bye World.txt', 'Writing to the file')
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,'file-data.txt')

const data = fs.readFileSync(filePath, 'utf-8');

const displayData = () => data;

module.exports = {
    displayData,
};
const fs = require('fs');

const data = fs.readFileSync('source.txt', 'utf-8');

fs.writeFileSync('destination.txt', data, 'utf-8');
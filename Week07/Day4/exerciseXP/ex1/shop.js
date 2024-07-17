const {array} = require('./products.js');


function searchProduct(productName) {
    return array.find((obj) => obj.name === productName);
}


console.log(searchProduct('table'));
console.log(searchProduct('chair'));


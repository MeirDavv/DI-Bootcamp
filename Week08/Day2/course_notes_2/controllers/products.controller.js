const {_getAllProducts} = require('../models/products.model.js');

const getAllProduct = (req,res) => {
    _getAllProducts()
    .then(result => {
        res.json(result)
    })

}

module.exports ={getAllProduct};
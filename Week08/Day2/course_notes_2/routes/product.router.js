const {getAllProduct} = require('../controllers/products.controller.js');
const express = require('express');

const router = express.Router();

router.get('/api/products', getAllProduct);

module.exports = {
    router
};
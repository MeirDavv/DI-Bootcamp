const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController.js')

router.get('/books', bookController.getAllBooks);
router.get('/books/:id',bookController.getBookById);
router.post('/posts', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/posts:id', bookController.deleteBook);

module.exports = {router};
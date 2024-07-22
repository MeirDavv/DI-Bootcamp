const Book = require('../models/bookModel.js');

const getAllBooks = async (req,res) => {
    try{
        const books = await Book.getAllBooks();
        res.json(books);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

const getBookById = async (req,res) => {
    try{
        const book = await Book.getBookById(req.params.id);
        if(!post){
            res.status(404).json({error: 'Post not found'});
        }
        else{
            res.json(book);
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

const createBook = async (req,res) => {
    try{
        const newBook = await Book.createBook(req.body);
        res.status(201).json(newBook);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

const updateBook = async (req,res) => {
    try{
        const updatedBook = await Book.updateBook(req.params.id,req.body)
        if(!updatedBook){
            return res.status(404).json({error: "Book not found"});
        }
        else{
            res.json(updatedBook);
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

const deleteBook = async (req,res) => {
    try{
        const result = await Book.deleteBook(req.params.id);
        if(!result){
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.status(204).json('Book was deleted successfully!')
        }
    }catch(err){
        res.status(500).json({'error': err.message});
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
}
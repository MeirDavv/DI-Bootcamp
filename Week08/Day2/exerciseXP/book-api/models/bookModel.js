const {db} = require('../config/db.js');

// creating a table in the database:
/*
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    publishedYear INTEGER
    )
*/

const Book = {
    getAll: ()=> db('books').select('id,title,author,publishedYear'),
    getById: (id)=> db('books').where({id}).select('id,title,author,publishedYear'),
    create: (book)=> db('books').insert(book).returning('id,title,author,publishedYear'),
    update: (id,book)=> db(books).update(post).where({id}).returning('id,title,author,publishedYear'),
    delete: (id)=> db(books).del().where({id}),
}

module.exports = {Book};
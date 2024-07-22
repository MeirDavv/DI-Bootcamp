const {db} = require('../config/db.js');

// creating a table in the database:
/*
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
)
*/

const Post = {
    getAll: () => db('posts').select('id,title,content'),
    getById: (id) => db('posts').where({id}).select('id,title,content'),
    create: (post) => db('posts').insert(post).returning('id,title,content'),
    update: (id, post) => db('posts').update(post).where({id}).returning('id,title,content'),
    delete: (id) => db('posts').del().where({id}),
}

module.exports = {Post};
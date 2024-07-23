const {db} = require('../config/db.js');

// creating a table in the database:
/*
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
)
*/

const User = {
    getAll: () => db('users').select('id,email,username,first_name,last_name'),
    getById: (id) => db('users').where({id}).select('id,email,username,first_name,last_name'),
    create: (post) => db('users').insert(post).returning('id,email,username,first_name,last_name'),
    update: (id, post) => db('users').update(post).where({id}).returning('id,email,username,first_name,last_name'),
    delete: (id) => db('users').del().where({id}),
}

module.exports = {User};
const {db} = require('../config/db.js');

// creating a table in the database:
/*
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT
)
*/

const HashPwd = {
    getAll: () => db('hashpwd').select('id,username,password'),
    getById: (id) => db('hashpwd').where({id}).select('id,username,password'),
    create: (post) => db('hashpwd').insert(post).returning('id,username,password'),
    update: (id, post) => db('hashpwd').update(post).where({id}).returning('id,username,password'),
    delete: (id) => db('hashpwd').del().where({id}),
}

module.exports = {HashPwd};
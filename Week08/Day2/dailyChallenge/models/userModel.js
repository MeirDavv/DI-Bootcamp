const { hash } = require('bcrypt');
const {db} = require('../config/db.js');

const addUser = async(user,hashedPassword) => {
    return db.transaction(async trx => {
        const [newUser] = await trx('users').insert(user).returning('*');
        await trx('hashpwd').insert({
            username: newUser.username,
            password: hashedPassword
        });
        return newUser;
    });
};

const getUserByUsername = async (username) => {
    return db('users').where({username}).first();
};

const getPasswordByUsername = async(username) =>{
    return db('hashpwd').where({username}).first();
};

const getAllUsers = async () => {
    return db('users').select('*');
}

const getUserById = async (id) => {
    return db('users').where({ id }).first();
};

const updateUser = async (id, user) => {
    return db('users').where({ id }).update(user).returning('*');
};

module.exports = {
    addUser,
    getUserByUsername,
    getPasswordByUsername,
    getAllUsers,
    getUserById,
    updateUser
};
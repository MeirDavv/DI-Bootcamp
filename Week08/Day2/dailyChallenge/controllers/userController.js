const bcrypt = require('bcrypt');
const {User} = require('../models/userModel.js');

const registerUser = async (req,res)=> {
    try{
        const {username,password,email,first_name,last_name} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = {username,email,first_name,last_name};
        const newUser = await userModel.addUser(user,hashedPassword);
        res.status(201).json(newUser);
    }catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
}

const loginUser = async (req,res) => {
    try{
        const {username, password} = req.body;
        const user = await userModel.getUserByUsername(user);
        if(!user){
            return res.status(400).json({error: 'Invalid username or password'});
        }
        const storedPassword = await userModel.getPasswordByUsername(username);
        const isMatch = await bcrypt.compare(password, storedPassword.password);
        if(!isMatch){
            return res.status(400).json({error: 'Invalid username or password'})
        }
        res.status(200).json({message: 'Login successful'});
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userModel.updateUser(id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser
};

const bcrypt = require('bcrypt');
const {User} = require('../models/userModel.js');
const {HashPwd} = require('../models/hashpwdModel.js');

const getAllUsers = async (req,res) => {
    try{
        const users = await userModel.getAll();
        res.json(users);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const  getUserById = async (req,res) => {
    try{
        const user = User.getById(req.params.id);
        if(!user)
            return res.status(404).json({error: 'Post not found'});
        else{
            res.json(user);
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const updateUser = async (req,res) => {
    try{
        const updatedUser = await User.update(req.params.id,req.body);
        if(!updatedUser) {
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.json(updatedUser);
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
};


const {Task} = require('../models/taskModels.js');

const getAllTasks = async(req,res) => {
    try{
        const tasks = await Task.getAllTasks()
        res.json(tasks);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const getTaskById = async (req,res) => {
    try{
        const task = await Task.getTaskById(req.params.id);
        if (!task)
            return res.status(404).json({error: 'Task not found!'});
        res.json(task);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const createTask = async (req,res) => {
    try{
        const newTask = await Task.createTask(req.body);
        res.status(201).json(newTask);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

const updateTask = async (req,res) => {
    try{
        const updatedTask = await Task.updateTask(req.params.id,req.body);
        if(!updatedTask) {
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.json(updatedTask);
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

const deleteTask = async (req,res) => {
    try{
        const result = await Task.deleteTask(req.params.id);
        if(!result){
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.status(204).send();
        }
    }catch(err){
        res.status(500).json({'error': err.message});
    }
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
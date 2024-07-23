const {Post} = require('../models/blogModel.js');

const getAllPosts = async (req,res) => {
    try{
        const posts = await Post.getAll();
        res.json(posts);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const  getPostById = async (req,res) => {
    try{
        const post = await Post.getById(req.params.id);
        if(!post)
            return res.status(404).json({error: 'Post not found'});
        else{
            res.json(post);
        }
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const createPost = async (req,res) => {
    try{
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

const updatePost = async (req,res) => {
    try{
        const updatedPost = await Post.update(req.params.id,req.body);
        if(!updatedPost) {
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.json(updatedPost);
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

const deletePost = async (req,res) => {
    try{
        const result = await Post.delete(req.params.id);
        if(!result){
            return res.status(404).json({error: 'Post not found'});
        }
        else{
            res.status(204).json('Post was deleted successfully!');
        }
    }catch(err){
        res.status(500).json({'error': err.message});
    }
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
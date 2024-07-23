const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController.js');

router.get('/posts', blogController.getAllPosts);
router.get('/posts/:id', blogController.getPostById);
router.post('/posts', blogController.createPost);
router.put('/posts/:id', blogController.updatePost);
router.delete('/posts/:id', blogController.deletePost);

module.exports = router;
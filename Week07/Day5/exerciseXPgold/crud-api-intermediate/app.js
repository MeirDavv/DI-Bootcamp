const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

//get request
app.get('/api/posts', async(req,res)=>{
    try{
        const response = await axios.get(baseURL);
        res.send(response.data);
    }
    catch(error){
        res.status(500).send("Error fetching posts");
    }
});

//get request with id
app.get('/api/posts/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const response = await axios.get(`${baseURL}/${id}`);
        res.send(response.data);
    }
    catch(error){
        res.status(404).send("Post not found")
    }
});

//post request
app.post('/api/posts', async(req,res)=>{
    try{
        const response = await axios.post(baseURL,req.body);
        res.status(201).send(response.data);
    }
    catch(error){
        res.status(500).send("Error creating post")
    }
});

//put request
// app.put('/api/posts/:id', (req,res)=>{
//     const {id} = req.params;
//     const updatedPost = req.body;
//     const indexPost = posts.findIndex((post)=> post.id == id);
//     if(indexPost == -1){
//         res.send("Post not found");
//     }
//     else{
//         posts[indexPost] = {...updatedPost, id:id};
//         res.send(posts);
//     }
// });

// //delete request
// app.delete('/api/posts/:id', (req,res) =>{
//     const {id} = req.params;
//     const indexPost = posts.findIndex((post)=> post.id == id);
//     if(indexPost == -1){
//         res.send("Post not found");
//     }
//     else{
//         posts.splice(indexPost,1);
//         res.send(posts);
//     }
// });

// PUT request using axios
app.put('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.put(`${baseURL}/${id}`, req.body);
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error updating post");
    }
});

// DELETE request using axios
app.delete('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await axios.delete(`${baseURL}/${id}`);
        res.send({ message: "Post deleted" });
    } catch (error) {
        res.status(500).send("Error deleting post");
    }
});

app.listen(5003,()=> console.log("Run on 5003"));
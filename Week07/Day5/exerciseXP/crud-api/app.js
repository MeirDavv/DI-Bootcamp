import express from 'express';
import fetchPosts from './data/dataService.js'

const app = express();

app.listen(5003, ()=> console.log('run on 5003'));

app.get('/', async (req,res)=>{
        const posts = await fetchPosts();
        res.send(posts);
        console.log("Data has been successfully retrieved and sent as a response")
});
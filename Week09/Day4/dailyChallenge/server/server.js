const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req,res)=> res.send("Hello from express"))
app.post('/api/world', (req,res)=> {
    console.log(req.body)
    res.send({message: `I received your post request. This is what you sent me: ${req.body.message}`})
})


app.listen(PORT,() => {
    console.log("Listening on port", PORT);
})
const express = require('express');

let users = [{
    name:'John',
    age:25
},
{
    name:'Anne',
    age:22
},
{
    name:'Marry',
    age:21
}
]

const app = express();

app.listen(5001, ()=>{
    console.log('run on 5001');
})

app.use('/',express.static(__dirname + '/public'))

app.get('/users',(req,res)=>{
    res.send(users)
})
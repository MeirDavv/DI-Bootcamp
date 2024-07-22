const express = require('express');
const cors = require('cors');
const {router} = require('./routes/product.router.js');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.listen(process.env.port || 5003, () => {
    console.log(`run on ${process.env.PORT || 5003}`)
})

app.use('/', router);
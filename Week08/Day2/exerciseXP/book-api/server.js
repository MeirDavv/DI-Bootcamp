const express = require('express');
const cors = require('cors');
const {bookRoutes} = require('./routes/bookRoutes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api',bookRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
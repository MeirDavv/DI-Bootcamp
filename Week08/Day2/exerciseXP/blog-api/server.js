const express = require('express');
const cors = require('cors');
const {blogRoutes} = require('./routes/blogRoutes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api',blogRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
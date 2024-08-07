const express = require("express");
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
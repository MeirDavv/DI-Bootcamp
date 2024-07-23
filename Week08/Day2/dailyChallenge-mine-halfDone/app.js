// creating tables:

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     first_name VARCHAR(255),
//     last_name VARCHAR(255)
// );

// CREATE TABLE hashpwd (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     CONSTRAINT fk_username
//         FOREIGN KEY(username) 
//         REFERENCES users(username)
//         ON DELETE CASCADE
// );

const express = require('express');
const cors = require('cors');
const {userRoutes} = require('./routes/userRoutes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api',userRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});


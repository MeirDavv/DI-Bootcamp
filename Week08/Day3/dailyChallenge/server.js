const express = require('express');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'random_secret_key', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

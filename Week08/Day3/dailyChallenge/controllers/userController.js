const { db } = require('../config/db.js');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { first_name, last_name, email, username, password } = req.body;
    let errors = [];

    if (!first_name || !last_name || !email || !username || !password) {
        errors.push({ message: "Please enter all fields" });
    }

    if (password.length < 6) {
        errors.push({ message: 'Password should be longer than 5 characters' });
    }

    if (errors.length > 0) {
        res.render('register', { errors });
    } else {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const existingUser = await db('users2').where({ email }).orWhere({ username }).first();
            if (existingUser) {
                errors.push({ message: "Email or Username already registered" });
                return res.render('register', { errors });
            }

            await db('users2').insert({
                first_name,
                last_name,
                email,
                username,
                password: hashedPassword
            });

            res.redirect('/login');
        } catch (err) {
            console.error(err);
            res.render('register', { errors: [{ message: "An error occurred, please try again" }] });
        }
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    let errors = [];

    if (!username || !password) {
        errors.push({ message: "Please enter all fields" });
        return res.render('login', { errors });
    }

    try {
        const user = await db('users2').where({ username }).first();
        if (!user) {
            errors.push({ message: "Invalid credentials" });
            return res.render('login', { errors });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            errors.push({ message: "Invalid credentials" });
            return res.render('login', { errors });
        }

        // If authentication is successful, create a session
        req.session.user = {
            id: user.id,
            username: user.username
        };

        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.render('login', { errors: [{ message: "An error occurred, please try again" }] });
    }
};

module.exports = { registerUser, loginUser };

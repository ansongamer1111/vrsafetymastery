const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Utility function to handle errors
const handleError = (res, message, statusCode = 400) => {
    console.error(message);
    res.status(statusCode).json({ message });
};

// Sign-Up Controller
exports.signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return handleError(res, 'All fields are required');
        }

        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser) {
            return handleError(res, 'Email already exists');
        }

        const existingUsernameUser = await User.findOne({ username });
        if (existingUsernameUser) {
            return handleError(res, 'Username already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, message: 'User registered successfully' });
    } catch (error) {
        handleError(res, 'Server error');
    }
};

// Login Controller
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return handleError(res, 'All fields are required');
        }

        const user = await User.findOne({ email });
        if (!user) {
            return handleError(res, 'Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return handleError(res, 'Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        handleError(res, 'Server error');
    }
};

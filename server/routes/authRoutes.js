const express = require('express');
const { signUp, login } = require('../controllers/authController'); // Ensure this path is correct
const router = express.Router();

// Sign-Up Route
router.post('/sign-up', signUp);

// Login Route
router.post('/login', login);

module.exports = router;

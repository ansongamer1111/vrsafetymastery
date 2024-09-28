const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getCourses).post(protect, admin, addCourse);

module.exports = router;

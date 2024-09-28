const express = require('express');
const { getSkills, addSkill } = require('../controllers/skillController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(getSkills).post(protect, admin, addSkill);

module.exports = router;

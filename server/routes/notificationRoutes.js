const express = require('express');
const { getNotifications, addNotification } = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getNotifications).post(protect, addNotification);

module.exports = router;

const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET user statistics
router.get('/statistics', async (req, res) => {
  try {
    const userId = req.user._id; // Assuming req.user is available after authentication
    const coursesCompleted = await Course.countDocuments({ userId, status: 'completed' });
    const upcomingEvents = await Event.countDocuments({ participants: userId, date: { $gt: new Date() } });

    res.json({ coursesCompleted, upcomingEvents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

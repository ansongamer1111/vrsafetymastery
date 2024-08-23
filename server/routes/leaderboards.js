const express = require('express');
const Leaderboard = require('../models/Leaderboard');
const router = express.Router();

// GET leaderboard data
router.get('/', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().populate('userId', 'username').sort({ score: -1 }).limit(10);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

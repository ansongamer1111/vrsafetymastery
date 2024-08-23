const express = require('express');
const Badge = require('../models/Badge');
const router = express.Router();

// GET all badges
router.get('/', async (req, res) => {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new badge
router.post('/', async (req, res) => {
  const { name, description, icon, criteria } = req.body;
  const badge = new Badge({
    name,
    description,
    icon,
    criteria,
  });

  try {
    const newBadge = await badge.save();
    res.status(201).json(newBadge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

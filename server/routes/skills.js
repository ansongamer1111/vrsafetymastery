const express = require('express');
const Skill = require('../models/Skill');
const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new skill
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const skill = new Skill({
    title,
    description,
    image: req.file ? req.file.path : null,
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

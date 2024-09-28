const asyncHandler = require('express-async-handler');
const Skill = require('../models/Skill');

const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({});
  res.json(skills);
});

const addSkill = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const skill = new Skill({
    name,
    description,
  });

  const createdSkill = await skill.save();
  res.status(201).json(createdSkill);
});

module.exports = { getSkills, addSkill };

const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

const addCourse = asyncHandler(async (req, res) => {
  const { title, description, duration } = req.body;

  const course = new Course({
    title,
    description,
    duration,
  });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

module.exports = { getCourses, addCourse };

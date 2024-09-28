const asyncHandler = require('express-async-handler');
const Notification = require('../models/Notification');

const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find({ user: req.user._id });
  res.json(notifications);
});

const addNotification = asyncHandler(async (req, res) => {
  const { message, user } = req.body;

  const notification = new Notification({
    message,
    user,
  });

  const createdNotification = await notification.save();
  res.status(201).json(createdNotification);
});

module.exports = { getNotifications, addNotification };

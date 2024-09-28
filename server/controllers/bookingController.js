const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({});
  res.json(bookings);
});

const addBooking = asyncHandler(async (req, res) => {
  const { user, course, date } = req.body;

  const booking = new Booking({
    user,
    course,
    date,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

module.exports = { getBookings, addBooking };

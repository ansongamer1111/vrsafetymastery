const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const skillsRouter = require('./routes/skills');

mongoose.connect('mongodb://localhost:27017/vrsafety', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

dotenv.config();

const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/skills', skillsRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/skills', require('./routes/skills'));
// Add more routes as necessary

app.listen(5000, () => {
    console.log('Server running on port 5000');
  });

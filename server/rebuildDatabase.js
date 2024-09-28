const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Your MongoDB connection string
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/Vr_Safety_Mastery';

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Function to connect and rebuild the database
const rebuildDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Drop the existing database
    await mongoose.connection.db.dropDatabase();
    console.log('Database dropped!');

    // Example user data to insert after rebuild
    const users = [
      {
        username: 'admin',
        email: 'admin@example.com',
        password: await bcrypt.hash('adminpassword', 10)
      },
      {
        username: 'user1',
        email: 'user1@example.com',
        password: await bcrypt.hash('password123', 10)
      }
    ];

    // Insert the example data
    await User.insertMany(users);
    console.log('User data inserted');

    mongoose.connection.close();
    console.log('Database rebuilt and connection closed');
  } catch (error) {
    console.error('Error rebuilding database:', error);
    mongoose.connection.close();
  }
};

// Run the rebuild script
rebuildDatabase();

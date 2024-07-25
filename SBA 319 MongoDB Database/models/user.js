// models/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email must be unique'],
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  color: {
    type: String,
    required: [true, 'Color is required']
  }
  // Additional fields can be added as needed
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

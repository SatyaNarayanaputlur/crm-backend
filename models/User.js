const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  lname: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 3,
  },
  type: {
    type: String,
    required: true,
    max: 10,
    min: 2,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);

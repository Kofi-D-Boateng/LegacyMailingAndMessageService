"use strict";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    default: null,
  },
  notifications: [
    {
      sender: String,
      receiver: String,
      amount: Number,
      date: String,
      read: Boolean,
    },
  ],
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

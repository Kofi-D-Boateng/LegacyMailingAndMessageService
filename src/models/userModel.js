"use strict";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    default: null,
  },
  notifications: {
    type: [],
    default: [],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

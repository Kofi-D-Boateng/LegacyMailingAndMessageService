"use strict";
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
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

export default models.User || model("User", userSchema);

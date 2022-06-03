"use strict";
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;
const date = new Date();

const customerServiceSchema = new Schema({
  department: {
    type: String,
    trim: true,
    unique: true,
  },
  queue: [
    {
      emailer: String,
      sentAt: Date,
      topic: String,
      msg: String,
      completed: Boolean,
    },
  ],
});

export default models.customerService ||
  model("customer_service", customerServiceSchema);

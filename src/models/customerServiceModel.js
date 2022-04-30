"use strict";
const mongoose = require("mongoose");

const customerServiceSchema = new mongoose.Schema({
  department: {
    type: String,
    trim: true,
    unique: true,
  },
  queue: {
    type: [],
    default: [],
  },
});

module.exports =
  mongoose.models.customerService ||
  mongoose.model("customer_service", customerServiceSchema);

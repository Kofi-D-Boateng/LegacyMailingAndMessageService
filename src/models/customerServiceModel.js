"use strict";
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const customerServiceSchema = new Schema({
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

export default models.customerService ||
  model("customer_service", customerServiceSchema);

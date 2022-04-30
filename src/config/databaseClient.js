"use strict";
require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.DB_HOST ? process.env.DB_HOST : undefined;
const db = mongoose.connect(URI);

module.exports = db;

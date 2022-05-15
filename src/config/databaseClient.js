"use strict";
const mongoose = require("mongoose");
const config = require("./configurations");
const db = mongoose.connect(config.MONGO_DB_URI);

module.exports = db;

"use strict";
const mongoose = require("mongoose");

const URI = process.env.DB_URI ? process.env.URI : undefined;

const db = mongoose.connect(URI);

module.exports = db;

"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");

// DATABASE INSTATIATION
require("../src/config/databaseClient");

// ROUTE DEPENDENCIES
const NOTIFICATIONS = require("../src/routes/notifications");
const CUSTOMERSERVICE = require("../src/routes/customerService");
const VERIFICATION = require("../src/routes/verification");
const config = require("./config/configurations");

// WHITELIST
const WHITELIST = {
  origins: config.CORS_ORIGINS,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionSuccessStatus: 200,
};

//MIDDLEWARE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${WHITELIST.origins}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept, authorization,x-forwarded-for, User-Agent"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json());

// ROUTES
app.use(`/${config.VERSION}/user/notifications`, NOTIFICATIONS);
app.use(`/${config.VERSION}/customer-service`, CUSTOMERSERVICE);
app.use(`/${config.VERSION}/verification`, VERIFICATION);

app.listen(config.NOTI_PORT, (err) => {
  if (!err) {
    console.log(`Mailer process started on port: ${config.NOTI_PORT}`);
  }
});

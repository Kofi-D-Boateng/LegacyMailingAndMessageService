"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.ENVIRONMENT === "prod" ? undefined : 5500;

// DATABASE INSTATIATION
require("../src/config/databaseClient");

// ROUTE DEPENDENCIES
const NOTIFICATIONS = require("../src/routes/notifications");
const CUSTOMERSERVICE = require("../src/routes/customerService");

// WHITELIST
const WHITELIST = {
  origins: "*" || process.env.ORIGINS,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  optionSuccessStatus: 200,
};

//MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${WHITELIST.origins}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept, authorization,x-forwarded-for, User-Agent"
  );
  next();
});

// ROUTES
app.use("/user/notifications", NOTIFICATIONS);
app.use("/customer-service", CUSTOMERSERVICE);

app.listen(process.env.MAILER_PORT || PORT, (err) => {
  if (!err) {
    console.log(`Mailer process started on port: ${PORT}`);
  }
});

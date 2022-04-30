"use strict";
require("dotenv").config();
const app = require("express")();
const logger = require("morgan");
const PORT = process.env.ENVIRONMENT === "prod" ? undefined : 5500;

// DATABASE INSTATIATION
require("../src/config/databaseClient");

// ROUTE DEPENDENCIES
const NOTIFICATIONS = require("../src/routes/notifications");
const CUSTOMERSERVICE = require("../src/routes/customerService");

// WHITELIST
const WHITELIST = {
  origin: process.env.ORIGINS,
  credentials: true,
  optionSuccessStatus: 200,
};

//MIDDLEWARE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${WHITELIST.origin}`);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept, authorization,x-forwarded-for, User-Agent"
  );
  next();
});
app.use(logger("dev"));

// ROUTES
app.use("/user/notifications", NOTIFICATIONS);
app.use("/customer-service", CUSTOMERSERVICE);

app.listen(process.env.MAILER_PORT || PORT, (err) => {
  if (!err) {
    console.log(`Mailer process started on port: ${PORT}`);
  }
});

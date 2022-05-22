"use strict";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
const app = express();

// DATABASE INSTATIATION
import "../src/config/databaseClient.js";

// ROUTE DEPENDENCIES
import NOTIFICATIONS from "../src/routes/notifications/notifications.js";
import CUSTOMERSERVICE from "../src/routes/customerService/customerService.js";
import VERIFICATION from "../src/routes/verification/verification.js";
import config from "./config/configurations.js";

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
app.use(morgan("dev"));
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

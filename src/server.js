"use strict";
const app = require("express")();
require("../src/config/databaseClient");
const PORT = 5500;

// ROUTES
const NOTIFICATIONS = require("../src/routes/notifications");
const CUSTOMERSERVICE = require("../src/routes/customerService");

app.use("/user/notifications", NOTIFICATIONS);
app.use("/customer-service", CUSTOMERSERVICE);

app.listen(process.env.MAILER_PORT || PORT, (err) => {
  if (!err) {
    console.log(
      `Mailer process started on port: ${
        process.env.MAILER_PORT ? process.env.MAILER_PORT : PORT
      }`
    );
  }
});

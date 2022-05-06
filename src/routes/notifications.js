"use strict";

const {
  getNotification,
  setNotification,
} = require("../controllers/notifications/notificationsController");

const router = require("express").Router();

router.get("/", getNotification);

router.post("/set-notifications", setNotification);

module.exports = router;

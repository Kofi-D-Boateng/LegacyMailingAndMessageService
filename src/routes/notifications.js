"use strict";

const {
  getNotification,
  setNotification,
  markNotification,
} = require("../controllers/notifications/notificationsController");

const router = require("express").Router();

router.get("/", getNotification);

router.post("/set-notifications", setNotification);

router.post("/mark-notification", markNotification);

module.exports = router;

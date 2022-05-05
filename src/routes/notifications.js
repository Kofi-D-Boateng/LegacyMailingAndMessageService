"use strict";

const {
  getNotification,
  setNotification,
} = require("../controllers/notifications/notificationsController");

const router = require("express").Router();

router.get("/:user-email", getNotification);

router.post("set-notifications", setNotification);

module.exports = router;

"use strict";

const {
  getNotis,
} = require("../controllers/notifications/notificationsController");

const router = require("express").Router();

router.get("/:user-email", getNotis);

module.exports = router;

"use strict";

const {
  sendVerificationEmail,
} = require("../controllers/verification/verficationController");

const router = require("express").Router();

router.post("/send-email", sendVerificationEmail);

module.exports = router;

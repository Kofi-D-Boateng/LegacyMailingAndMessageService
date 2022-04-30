"use strict";

const {
  service,
} = require("../controllers/customerService/customerServiceController");

const router = require("express").Router();

router.post("/email", service);

module.exports = router;

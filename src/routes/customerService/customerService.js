"use strict";
import express from "express";
import setCustomerServiceEmail from "../../controllers/customerService/customerServiceController.js";

const router = express.Router();

router.put("/email-customer-service", setCustomerServiceEmail);

export default router;

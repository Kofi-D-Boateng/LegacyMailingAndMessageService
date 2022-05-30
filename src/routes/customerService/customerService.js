"use strict";
import express from "express";
import service from "../../controllers/customerService/customerServiceController.js";

const router = express.Router();

router.put("/email", service);

export default router;

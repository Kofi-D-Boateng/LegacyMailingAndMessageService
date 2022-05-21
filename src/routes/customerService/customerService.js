"use strict";
import express from "express";
import service from "../controllers/customerService/customerServiceController.js";

const router = express.Router();

router.post("/email", service);

export default router;

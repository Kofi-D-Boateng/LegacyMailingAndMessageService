"use strict";
import express from "express";
import sendVerificationEmail from "../controllers/verification/verficationController.js";
const router = express.Router();

router.post("/send-email", sendVerificationEmail);

export default router;

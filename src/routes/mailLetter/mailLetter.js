"use strict";
import express from "express";
import addToMailList from "../../controllers/mailLetter/mailLetterController.js";

const router = express.Router();

router.put("/add-to-list", addToMailList);

export default router;

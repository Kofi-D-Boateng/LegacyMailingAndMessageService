"use strict";
import express from "express";
import {
  getNotification,
  markNotification,
  setNotification,
} from "../../controllers/notifications/notificationsController.js";

const router = express.Router();

router.get("/", getNotification);

router.post("/set-notifications", setNotification);

router.post("/mark-notification", markNotification);

export default router;

"use strict";
import {
  _getNotification,
  _markNotification,
  _setNotification,
} from "../../utils/db.js";

const getNotification = async (req, res) => {
  const email = await req.query.email;
  try {
    const foundUser = await _getNotification(email);
    res.status(200).json(foundUser ? foundUser.notifications : undefined);
  } catch (error) {
    console.log(error.message);
  }
};

const setNotification = async (req, res) => {
  const transaction = await req.body;
  try {
    const RESULT = await _setNotification(transaction);
    res.status(RESULT).json();
  } catch (error) {
    console.log(error.message);
    res.status(400).json();
  }
};

const markNotification = async (req, res) => {
  const { email, msg_id } = req.body;
  try {
    const notifications = await _markNotification(email, msg_id);
    res.status(200).json(notifications);
  } catch (error) {
    console.log(error.message);
    res.status(400).json();
  }
};

export { getNotification, setNotification, markNotification };

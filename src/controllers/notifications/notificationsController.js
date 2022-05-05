"use strict";
const USER = require("../../models/userModel");

const getNotification = async (req, res) => {
  const email = req.params["user-email"];
  try {
    const foundUser = await USER.findOne({ email: email });
    res.status(200).json({ notis: foundUser.notifications });
  } catch (error) {
    res.status(401).json("user not found");
  }
};

const setNotification = async (req, res) => {
  console.log(req.body);
};

module.exports = { getNotification, setNotification };

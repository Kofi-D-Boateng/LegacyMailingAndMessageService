"use strict";
const USER = require("../../models/userModel");
const crypto = require("crypto");

const getNotification = async (req, res) => {
  const email = await req.query.email;
  try {
    const foundUser = await USER.findOne({ email: email });
    res.status(200).json(foundUser ? foundUser.notifications : undefined);
  } catch (error) {
    console.log(error);
  }
};

const setNotification = async (req, res) => {
  const transaction = await req.body;
  try {
    const user = await USER.findOne({ email: transaction.email });
    console.log(user);
    if (!user) {
      const doc = {
        email: transaction.email,
        notifications: {
          sender: transaction.sender,
          receiver: transaction.receiver,
          amount: transaction.amount,
          date: transaction.localDateTime,
          read: false,
        },
      };
      await USER.insertMany(doc);
      res.json(true);
      return;
    }
    user.notifications.push({
      sender: transaction.sender,
      receiver: transaction.receiver,
      amount: transaction.amount,
      date: transaction.localDateTime,
      read: false,
    });
    await user.save();
    res.json(true);
  } catch (error) {
    console.log(error);
    res.json(false);
    return "error";
  }
};

module.exports = { getNotification, setNotification };

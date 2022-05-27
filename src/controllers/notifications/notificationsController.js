"use strict";
import USER from "../../models/userModel.js";

const getNotification = async (req, res) => {
  const email = await req.query.email;
  try {
    const foundUser = await USER.findOne({ email: email });
    res.status(200).json(foundUser ? foundUser.notifications : undefined);
  } catch (error) {
    console.log(error.message);
  }
};

const setNotification = async (req, res) => {
  const transaction = await req.body;
  try {
    const user = await USER.findOne({ email: transaction.email });
    const receiver = await USER.findOne({ email: transaction.receiverEmail });

    if (transaction.userInDatabase && !receiver) {
      const doc = {
        email: transaction.receiverEmail,
        notifications: {
          sender: transaction.sender,
          receiver: transaction.receiver,
          amount: transaction.amount,
          date: transaction.localDateTime,
          read: false,
        },
      };
      await USER.insertMany(doc);
    }

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
      res.status(200).json(true);
      return;
    }

    if (transaction.userInDatabase && receiver) {
      receiver.notifications.push({
        sender: transaction.sender,
        receiver: transaction.receiver,
        amount: transaction.amount,
        date: transaction.localDateTime,
        read: false,
      });
      await receiver.save();
    }

    user.notifications.push({
      sender: transaction.sender,
      receiver: transaction.receiver,
      amount: transaction.amount,
      date: transaction.localDateTime,
      read: false,
    });
    await user.save();
    res.status(200).json(true);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(false);
  }
};

const markNotification = async (req, res) => {
  const { email, msg_id } = req.body;
  try {
    const user = await USER.findOne({ email: email });
    user.notifications.map((n) => {
      const ID = n._id.toString();
      if (ID === msg_id) {
        n.read = true;
      }
    });
    await user.save();
    res.status(200).json(user.notifications);
  } catch (error) {
    console.log(error.message);
    res.status(400).json();
  }
};

export { getNotification, setNotification, markNotification };

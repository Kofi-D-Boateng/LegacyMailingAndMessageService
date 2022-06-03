"use strict";
import userModel from "../models/userModel.js";
import customerServiceModel from "../models/customerServiceModel.js";

const _sendToDept = async (dept, data) => {
  const foundDept = await customerServiceModel.findOne({ department: dept });
  if (foundDept) {
    foundDept.queue.push({
      emailer: data.emailer,
      topic: data.topic,
      msg: data.msg,
      sentAt: data.sentAt,
    });
    await foundDept.save();
    return 200;
  } else {
    const doc = {
      department: dept,
      queue: data,
    };
    await customerServiceModel.insertMany(doc);
    return 200;
  }
};

const _getNotification = async (email) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

const _setNotification = async (transaction) => {
  const user = await userModel.findOne({ email: transaction.email });
  const receiver = await userModel.findOne({
    email: transaction.receiverEmail,
  });

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
    await userModel.insertMany(doc);
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
    await userModel.insertMany(doc);
    return 200;
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
  return 200;
};

const _markNotification = async (email, msg_id) => {
  const user = await userModel.findOne({ email: email });
  user.notifications.map;
  user.notifications.map((n) => {
    const ID = n._id.toString();
    if (ID === msg_id) {
      n.read = true;
    }
  });
  await user.save();
  return user.notifications;
};

export { _sendToDept, _getNotification, _markNotification, _setNotification };

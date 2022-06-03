"use strict";
import { _sendToDept } from "../../utils/db.js";

const setCustomerServiceEmail = async (req, res) => {
  const date = new Date();
  const DATA = {
    emailer: req.body.email,
    topic: req.body.topic,
    msg: req.body.text,
    sentAt: date.toUTCString(),
  };
  const account = DATA.topic.match(/Locked Account|Account|Transfer Issue|/i);
  const billing = DATA.topic.match(/billing|notice|Billing|Notice/i);
  try {
    if (account) {
      const RESULT = await _sendToDept("Accounts", DATA);
      res.status(RESULT).json();
      return;
    }
    if (billing) {
      const RESULT = await _sendToDept("Billing", DATA);
      res.status(RESULT).json();
      return;
    }
    const RESULT = await _sendToDept("Other", DATA);
    res.status(RESULT).json();
  } catch (error) {
    console.log(error.message);
    res.status(400).json();
  }
};

export default setCustomerServiceEmail;

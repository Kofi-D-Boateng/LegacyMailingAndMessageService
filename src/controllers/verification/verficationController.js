"use strict";

const { confirmationEmail } = require("../../utils/mailer");

const sendVerificationEmail = async (req, res) => {
  const { token, person } = req.body;
  const RESULT = await confirmationEmail(token, person);
  res.status(RESULT).json("");
};

module.exports = { sendVerificationEmail };

"use strict";

const { confirmationEmail } = require("../../utils/mailer");

const sendVerificationEmail = async (req, res) => {
  const { token, person } = req.body;
  await confirmationEmail(token, person);
};

module.exports = { sendVerificationEmail };

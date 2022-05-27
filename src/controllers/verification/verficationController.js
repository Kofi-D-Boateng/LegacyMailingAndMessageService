"use strict";

import { confirmationEmail } from "../../utils/mailer.js";

const sendVerificationEmail = async (req, res) => {
  const { token, person } = req.body;
  const RESULT = await confirmationEmail(token, person);
  res.status(RESULT).json();
};

export default sendVerificationEmail;

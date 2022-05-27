"use strict";
import { createTransport } from "nodemailer";
import config from "../config/configurations.js";

const TRANSPORT = createTransport({
  service: config.MAILER_SERVICE,
  host: config.MAILER_SMTP_HOST,
  auth: {
    user: config.MAILER_USER,
    pass: config.MAILER_PASSWORD,
  },
});

const confirmationEmail = async (token, person) => {
  const Link = `${config.ACCT_AUTH_LINK}?token=${token}`;

  const message = person.name.trim()
    ? `Thank you ${person.name} for opening an account with Legacy Bank. Please click on the link below to verify your account. 
    ${Link}`
    : `You have requested a new link to verify your account. Please click on the link below to verify your account. 
    ${Link}`;

  const mailOptions = {
    to: person.email,
    subject: "Confirm your account info",
    text: message,
  };
  try {
    await TRANSPORT.sendMail(mailOptions);
    return 200;
  } catch (error) {
    console.log(error.message);
    return 400;
  }
};

export { confirmationEmail };

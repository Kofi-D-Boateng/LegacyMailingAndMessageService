"use strict";
import { createTransport } from "nodemailer";
import CS from "../models/customerServiceModel.js";
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
  const Link = `${config.ACCT_AUTH_LINK}/${token}`;
  const mailOptions = {
    from: "",
    to: person.email,
    subject: "Confirm your account info",
    text: `Thank you ${person.name} for opening an account with Legacy Bank. Please click on the link below to verify your account. 
      ${Link}`,
  };
  try {
    await TRANSPORT.sendMail(mailOptions);
    return 200;
  } catch (error) {
    console.log(error);
    return 400;
  }
};

export { confirmationEmail };

"use strict";
const mailer = require("nodemailer");
const User = require("../models/userModel");
const CS = require("../models/customerServiceModel");
const USER = process.env.MAILER_USER ? process.env.MAILER_USER : undefined;
const PW = process.env.MAILER_USER ? process.env.MAILER_PW : undefined;

const TRANSPORT = mailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: USER,
    pass: PW,
  },
});

const confirmationEmail = async (token, person) => {
  const Link =
    process.env.ENV === "prod"
      ? null
      : `http://localhost:8081/authentication/activate-account/${token}`;
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

module.exports = { confirmationEmail };

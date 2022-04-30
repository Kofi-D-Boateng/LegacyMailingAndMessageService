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

const confirmationEmail = () => {};

module.exports = { confirmationEmail };

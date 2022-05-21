"use strict";
const config = {
  createdBy: "Kofi Boateng",
  createdAt: "4/29/2022",
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  CORS_ORIGINS: process.env.CORS_ALLOW_ORIGINS,
  NOTI_PORT: process.env.NOTI_PORT,
  VERSION: "api/v1",
  // HOST: THE HOST THE SMTP SERVICE SETS ON. EX: GOOGLE'S = "smtp.gmail.com"
  MAILER_SMTP_HOST: process.env.MAILER_SMTP_HOST,
  // HOST: THE SERVICE THE SMTP SERVICE SETS ON. EX: GOOGLE'S = "gmail"
  MAILER_SERVICE: process.env.MAILER_SERVICE,
  // USERNAME FOR MAILER SERVICE
  MAILER_USER: process.env.MAILER_USERNAME,
  // PASSWORD FOR MAILER SERVICE
  MAILER_PASSWORD: process.env.MAILER_PWD,
  // LINK TO BE SENT TO AUTHENTICATE ACCOUNT
  ACCT_AUTH_LINK: process.env.ACCT_AUTH_LINK,
};

export default config;

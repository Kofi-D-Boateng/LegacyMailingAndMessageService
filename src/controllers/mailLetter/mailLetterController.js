"use strict";

const addToMailList = async (req, res) => {
  const { email } = req.body;
  if (typeof email === "string" && email.includes("@")) {
    res.status(200).json();
  } else {
    res.status(400).json();
  }
};

export default addToMailList;

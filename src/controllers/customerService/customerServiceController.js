const service = async (req, res) => {
  const DATA = {
    emailer: req.body.email,
    msg: req.body.text,
  };
  console.log(DATA);
};

module.exports = { service };

const express = require("express"),
  router = express.Router(),
  AuthModel = require("../models/Auth"),
  bcrypt = require("bcryptjs");

// add new product
router.post("/login", async (req, res) => {
  let loginCreds = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const user = await AuthModel.findOne({ email: loginCreds.email });

    if (!user) {
      res.status(404).json({ email: "no account with this email" });
    } else {
      const passMatched = bcrypt.compareSync(
        loginCreds.password,
        user.password
      );
      if (!passMatched) {
        res.status(400).json({ password: "password incorect" });
      } else {
        res.status(200).json({ email: loginCreds.email });
      }
    }
  } catch (err) {
    // console.log(err);
    res
      .status(503)
      .json({ error: "Something went wrong. Please try again later" });
  }
});

router.post("/register", async (req, res) => {
  let loginCreds = {
    email: req.body.email,
    password: req.body.password,
  };

  const encryptedPass = await bcrypt.hash(loginCreds.password, 12);

  loginCreds.password = encryptedPass;

  try {
    let newUser = await new AuthModel(loginCreds).save();
    res.status(200).json({ success: true, email: newUser.email });
  } catch (err) {
    // console.log(err);
    res
      .status(503)
      .json({ error: "Cannot create user. Please try again later" });
  }
});

module.exports = router;

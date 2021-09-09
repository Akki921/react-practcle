const express = require("express");
const router = express.Router();
const User = require("../models/User");

//here add bcryptjs
const bcrypt = require("bcryptjs");
//feth from middleware
const fetchuser = require("../middleware/Fetchuser");

// heere add jsonwebtoken
const jwt = require("jsonwebtoken");
//imp express validator
const { body, validationResult } = require("express-validator");
//created routes

//secrete key
const JWT_SECRETE = "Akshayisgoodb$oy";

///Route 1: create new user using : POST "/api/auth/create" .no login reqiured
router.post(
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 5 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if error presents return bad request and the errors get this from expressvalidator
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    //chek user with this email is exist allreadyy

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "sorry user with this email alllready exist",
        });
      }
      const salt = await bcrypt.genSalt(10);

      const Secpass = await bcrypt.hash(req.body.password, salt);
      //create user if email is not allready in db
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: Secpass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      //here generate the token
      const AuthToken = jwt.sign(data, JWT_SECRETE);
      console.log(AuthToken);
      success = true;
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

///Route2: Authinticate  user using : POST "/api/auth/login" .no login reqiured
router.post(
  "/login",
  [
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").exists(),
  ],
  async (req, res) => {
    // if error presents return bad request and the errors get this from expressvalidator
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //destructuring

    const { email, password } = req.body;

    try {
      // check User is available or not in db
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json("Please Login With Correct Credential");
      }
      // compare password with hast string
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please Login With Correct Credential" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      //here generate the token
      const AuthToken = jwt.sign(data, JWT_SECRETE);
      success = true;
      console.log(AuthToken);
      res.json({ success, AuthToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUte3: get logging user details  using  : POST "/api/auth/getuser" . login reqiured
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userid = req.user.id;
    const user = await User.findById(userid).select("password");
    res.send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;

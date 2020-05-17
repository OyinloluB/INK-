const express = require("express");
const path = require('path');
const fs = require('fs');

const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const cloudinaryUtil = require("../util/cloudinary");

//@route   POST api/user
//@desc    Register a user
//@access  Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({
      min: 6,
    }),
    check("image").custom((value, { req }) => {
      if (!req.files) {
        throw new Error("Feature Image Required");
      }
      return true;
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      
      const {image} = req.files;

      const imagePath = path.resolve(`./temp/${image.name}`);
      await image.mv(imagePath);

      const imageRes = await cloudinaryUtil.upload(imagePath);

      fs.unlinkSync(imagePath, (error) => {
        if (error) throw new Error(error.message);
      });

      user = new User({
        name,
        email,
        password,
        imageUrl: imageRes.secure_url,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err)
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Posts = require("../models/Posts");
const auth = require("../middleware/auth");

//@route   GET api/posts
//@desc    Get all user's posts
//@access  Private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Posts.find({ user: req.user.id }).sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/posts
//@desc    Add new post
//@access  Private
router.post(
  "/",
  [auth, [check("post", "This field cannot be empty").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { post, type } = req.body;

    try {
      const newPost = new Posts({
        post,
        type,
        user: req.user.id,
      });

      const userPost = await newPost.save();

      res.json(userPost)
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route   PUT api/posts/:id
//@desc    Update post
//@access  Private
router.put("/:id", (req, res) => {
  res.send("Update post");
});

//@route   DELETE api/posts/:id
//@desc    Delete post
//@access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete post");
});

module.exports = router;

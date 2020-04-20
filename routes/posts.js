const express = require("express");
const router = express.Router();

//@route   GET api/posts
//@desc    Get all user's posts
//@access  Private
router.get("/", (req, res) => {
  res.send("Get all posts");
});

//@route   POST api/posts
//@desc    Add new post
//@access  Private
router.post("/", (req, res) => {
  res.send("Add post");
});

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

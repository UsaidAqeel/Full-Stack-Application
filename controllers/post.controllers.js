const postModel = require("../models/post.model");

const Posts = {
  createPost: (req, res) => {
    try {
      const { userName, postDes, postTitle } = req.body;
      if (!userName || !postDes || !postTitle) {
        res.status(500).json({ message: "some filled is missings" });
      }
      postModel.create(req.body, (err, data) => {
        if (err) res.status(500).json({ message: "something is wrong" });
        else {
          res.status(200).json({ message: "Post created", data });
        }
      });
    } catch {
      res.status(500).json({ message: "something is wrong" });
    }
  },
  getPost: (req, res) => {
    try {
      postModel.find({}, (err, data) => {
        if (err) res.status(500).json({ message: "something is wrong" });
        else {
          res.status(200).json({ message: "Post created", data });
        }
      });
    } catch {
      res.status(500).json({ message: "something is wrong" });
    }
  },
  // find({createdAt: {
  //   $gte: new Date('2023-01-1'), 
  //   $lt: new Date('2023-01-10')
  getData: (req, res) => {
    try {
      var d = new Date();
      d.setDate(d.getDate() - 7);
      postModel.find().sort({ createdAt: 1 }).limit(2).exec({}  , (err, data) => {
        if (err) res.status(500).json({ message: "something is wrong" });
        else {
          res.status(200).json({ message: "Post created", data });
        }
      });
    } catch {
      res.status(500).json({ message: "something is wrong" });
    }
  }
};

module.exports = Posts;
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userName: { type: String, required: true },
  postTitle: { type: String, required: true },
  postDes: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
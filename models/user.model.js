const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  Role: { type: String, default: "user" },
  createdAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

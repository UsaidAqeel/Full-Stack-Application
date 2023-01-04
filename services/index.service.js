const mongoose = require("mongoose");

const Connect = () => {
  mongoose
    .connect(process.env.BaseUrl)
    .then((res) => console.log("monogoDB Connect"))
    .catch((err) => console.log("mongoDB Fail"));
};

module.exports = Connect;
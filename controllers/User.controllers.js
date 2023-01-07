const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = {
  createUser: (req, res) => {
    try {
      const { userName, userEmail, userPassword } = req.body;
      if (!userName || !userEmail || !userPassword) {
        res.status(500).json({ message: "some filled is missing" });
        return;
      }
      userModel.findOne({ userEmail }, async (err, user) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Something is wrong" });
          return;
        } else {
          if (user) {
            res.status(500).json({ message: "Email is already exist" });
          } else {
            const hashPassword = await bcrypt.hash(userPassword, 10);
            const obj = { userEmail, userName, userPassword: hashPassword };
            userModel.create(obj, (err, data) => {
              if (err) {
                res.status(500).json({ message: "Some thing is wrong" });
              } else {
                res.status(200).json({ message: "user created", data });
              }
            });
          }
        }
      });
    } catch (err) {
      res.status(500).json({ message: "err" });
    }
  },
  logInUser: (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;
      if (!userEmail || !userPassword) {
        res.status(500).json({ message: "Something is missing" });
        return;
      }
      userModel.findOne({ userEmail }, async (err, user) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Something is wrong" });
          return;
        } else {
          if (user) {
            const isPasswordMatch = await bcrypt.compare(
              userPassword,
              user.userPassword
            );
            console.log(isPasswordMatch, "isPasswordMatch");
            if (isPasswordMatch) {
              const tokenObj = {
                ...user,
              };
              const token = jwt.sign(tokenObj, process.env.Key);
              console.log(token);
              res.status(200).json({
                message: "user successfully login",
                data: user,
                status: true,
                token,
              });
            } else {
              res.status(500).json({
                message: "Password not match",
              });
            }
          } else {
            res.status(500).json({
              message: "User not found",
            });
          }
        }
      });
    } catch (err) {
      res.status(500).json({ message: "something is wrong" });
    }
  },
};

module.exports = User;

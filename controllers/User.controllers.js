const mongoose = require("mongoose");
const userModel = require("../models/user.model");

const User = {
  createUser: (req, res) => {
    try {
      const { userName, userEmail, userPassword } = req.body;
      if (!userName || !userEmail || !userPassword) {
        res.statuscode;
        res.json({ message: "some filled is missing" });
      }
      userModel.create(req.body, (err, data) => {
        if (err) {
          res.status(500);
          res.json({ message: "Some thing is wrong" });
        } else {
          res.status(200);
          res.json({ message: "user created", data });
        }
      });
    } catch (err) {
      res.status(400);
      res.json({ message: "err" });
    }
  },
  logInUser: (req, res) => {
    try {
      const { userEmail, userPassword } = req.body;
      if (!userEmail || !userPassword) {
        res.status(400);
        res.json({ message: "Something is missing" });
        return;
      }
      userModel.findOne({userEmail},(err,data) => {
        if(err){
            console.log(err);
            res.status(500)
            res.json({message : "Something is wrong"})
            return
        }
        else{
            res.status(200)
            res.json({message : "Get user",data})
        }
      })
    } catch (err) {}
  },
};

module.exports = User;

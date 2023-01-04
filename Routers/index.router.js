const express = require("express");
const User = require("../controllers/User.controllers");

const router = express.Router();

router.post("/signUp",User.createUser)
router.post("/login",User.signUp)

module.exports = router
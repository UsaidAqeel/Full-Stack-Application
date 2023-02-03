const express = require("express");
const User = require("../controllers/User.controllers");
const middleware = require("../middlewares");
const Posts = require("../controllers/post.controllers");

const router = express.Router();

router.post("/signUp",User.createUser)
router.post("/logIn",User.logInUser)
router.post("/post",middleware.authUser,Posts.createPost)
router.get("/getPost",middleware.authUser,Posts.getPost)
router.get("/data",Posts.getData)

module.exports = router
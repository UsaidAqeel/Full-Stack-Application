const express = require("express");
const User = require("../controllers/User.controllers");
const middleware = require("../middlewares");
const Posts = require("../controllers/post.controllers");

const router = express.Router();

router.post("/signUp",User.createUser)
router.post("/logIn",User.logInUser)
router.get('/getLastFiveUsers',User.getLastFiveUsers )
router.get('/getAllUsers',User.getAllUser )
router.post("/post",middleware.authUser,Posts.createPost)
router.get("/getPost",middleware.authUser,Posts.getPost)
router.get("/getLastFivePosts",Posts.getLastFivePosts)

module.exports = router
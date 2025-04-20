const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { route } = require("./petRouter");
const passport = require("passport");

router.get("/signup", userController.signUpForm).post("/signup", userController.signUp);

router.get("/login", userController.loginForm).post("/login", passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login);

module.exports = router;
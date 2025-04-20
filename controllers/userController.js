const User = require("../models/user");

module.exports.signUpForm = (req, res) => {
    res.render("users/signup");
};

module.exports.signUp = async (req, res) => {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    res.redirect("/pets/ourPet");
};

module.exports.loginForm = (req, res) => {
    res.render("users/login");
};

module.exports.login = async (req, res) => {
    res.redirect('/pets/ourPet');
};
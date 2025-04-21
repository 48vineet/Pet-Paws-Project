const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require("express-session");
const User = require('./models/user');
const app = express();
const port = 8080;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

const petRouter = require("./routes/petRouter");
const foodRouter = require("./routes/foodRouter");
const petModel = require("./models/petModel");
const toyRouter = require("./routes/toyRouter");
const utilitiesRouter = require("./routes/utilitiesRouter");
const medicineRouter = require("./routes/medicineRouter");
const userRouter = require("./routes/userRoute");
const logoutRouter = require("./routes/logoutRouter");

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



let URL = "mongodb+srv://48vineet:Vineet%40123@airbnb.5tsow.mongodb.net/pets";
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(URL);
    console.log("Connection Succesfull");
}
app.use((req, res, next) => {
    res.locals.currUser = req.user;
    next();
});




app.get("/", async (req, res) => {
    const allPets = await petModel.find({});
    res.render("pets/index.ejs", { allPets });

});

app.use("/pets", petRouter);

app.use("/foods", foodRouter);

app.use("/toys", toyRouter);

app.use("/utilities", utilitiesRouter);

app.use("/medicines", medicineRouter);

app.use("/user", userRouter);

app.use("/logout", logoutRouter);



app.listen(port, () => console.log(`app listening on port ${port}!`));



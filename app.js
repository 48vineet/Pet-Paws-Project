const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override");
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



let URL = "mongodb+srv://48vineet:Vineet%40123@airbnb.5tsow.mongodb.net/pets";
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(URL);
    console.log("Connection Succesfull");
}

const petRouter = require("./routes/petRouter");
const petModel = require("./models/petModel");

app.get("/", async (req, res) => {
    const allPets = await petModel.find({});
    res.render("pets/index.ejs", { allPets });

});




app.use("/pets", petRouter);

app.listen(port, () => console.log(`app listening on port ${port}!`));



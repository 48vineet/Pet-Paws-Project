const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));




let URL = "mongodb+srv://48vineet:Vineet%40123@airbnb.5tsow.mongodb.net/pets";
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(URL);
    console.log("Connection Succesfull");
}


app.get('/listings', (req, res) => res.render('index.ejs'));
app.listen(port, () => console.log(`app listening on port ${port}!`));
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();
const port = 8080; 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));




let URL = "mongodb+srv://48vineet:Vineet%40123@airbnb.5tsow.mongodb.net/pets";
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(URL);
    console.log("Connection Succesfull");
}


app.get('/listings', (req, res) => {
    res.render('listings/index');
});

app.get('/listings/new', (req, res) => {
    res.render('listings/new');
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
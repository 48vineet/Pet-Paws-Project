const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const foodSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    company: String,
    type: String,
    description: String
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;



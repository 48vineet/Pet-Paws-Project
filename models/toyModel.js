const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const toySchema = new Schema({
    name: String,
    price: Number,
    image: String,
    company: String,
    type: String,
    description: String
});

const Toy = mongoose.model("Toy", toySchema);
module.exports = Toy;



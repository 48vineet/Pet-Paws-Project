const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    company: String,
    type: String,
    description: String
});

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;
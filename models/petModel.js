const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const petSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    traits: String,
    breed: String
});
const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet; 
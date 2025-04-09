const petModel = require("../models/petModel");

module.exports.renderPostRoute = async (req, res) => {
    console.log(req.body);
    // const newPet = new petModel(req.body.pets);
    // newPet.name = req.body.name;
    // newPet.price = req.body.price;
    // newPet.description = req.body.description;
    // newPet.image = req.body.image;
    // newPet.traits = req.body.traits;
    // let savedPet = await newPet.save();
    // console.log(savedPet);
};
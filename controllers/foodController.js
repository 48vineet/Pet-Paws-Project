const foodModel = require("../models/foodModel");

module.exports.foodPageIndex = async (req, res) => {
    const allFood = await foodModel.find({});
    res.render("foods/index", { allFood });
};  
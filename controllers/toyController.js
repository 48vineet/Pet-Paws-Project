const toyModel = require("../models/toyModel");

module.exports.toyRoute = async (req, res) => {
    const allToy = await toyModel.find({});
    res.render("foods/toys", { allToy });
};

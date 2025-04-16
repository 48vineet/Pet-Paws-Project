const utilitiesModel = require("../models/utilitiesModel");
module.exports.utilities = async (req, res) => {
    const allUtilities = await utilitiesModel.find({});
    res.render("foods/utilities", { allUtilities });
};



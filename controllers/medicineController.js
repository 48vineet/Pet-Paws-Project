const medicineModal = require('../models/medicineModal');

module.exports.indexPage = async (req, res) => {
    res.render("medicines/index");
};

module.exports.medicinePage = async (req, res) => {
    const allMedicine = await medicineModal.find({});
    res.render('medicines/medicine', { allMedicine });
};
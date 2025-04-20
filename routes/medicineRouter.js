const express = require('express');
const router = express.Router();
const medicineController = require("../controllers/medicineController");

router.route("/").get(medicineController.indexPage);
router.route('/allMedicine').get(medicineController.medicinePage);


module.exports = router;

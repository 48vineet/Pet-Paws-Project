const express = require("express");
const router = express.Router();
const utilitiesController = require("../controllers/utilitiesController");

router.route("/").get(utilitiesController.utilities);

module.exports = router;
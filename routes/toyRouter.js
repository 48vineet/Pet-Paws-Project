const express = require("express");
const router = express.Router();
const toyController = require("../controllers/toyController");

router.route("/").get(toyController.toyRoute);

module.exports = router;
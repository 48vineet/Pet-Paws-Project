const express = require("express");
const router = express.Router();

const petController = require("../controllers/petController");

router.route("/").get();

router.route("/newPet").post(petController.renderPostRoute);

// router.route("/:id/editPet").put();

// router.delete("/:id").delete();

module.exports = router; 
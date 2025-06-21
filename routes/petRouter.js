const express = require("express");
const router = express.Router();

const petController = require("../controllers/petController");

router.route("/").get(petController.renderPets);

router.route("/ourPet").get(petController.showPets);

router.route("/newPet").get(petController.renderForm).post(petController.renderPostRoute);

router.route("/:id").get(petController.renderShowRoute).put(petController.renderUpdatePet).delete(petController.renderDeletePet); 

router.route("/:id/editPet").get(petController.renderEditForm);

module.exports = router;  
const express = require("express");
const router = express.Router();

const pet;


router.route("/").get();

router.route("/newPet").post();

router.route("/:id/editPet").put();

router.delete("/:id").delete();
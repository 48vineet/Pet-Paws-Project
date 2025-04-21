const petModel = require("../models/petModel");
const foodModel = require("../models/foodModel");

module.exports.renderForm = async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("/user/login");
    } else { res.render("pets/new.ejs"); }

};

module.exports.renderPets = async (req, res) => {
    const allPets = await petModel.find({});
    res.render("pets/index.ejs", { allPets });
};

module.exports.showPets = async (req, res) => {
    const allPets = await petModel.find({});
    res.render("pets/ourpets", { allPets });
};

module.exports.renderPostRoute = async (req, res) => {
    console.log(req.body);
    const newPet = new petModel(req.body.pet);
    let savedPet = await newPet.save();
    console.log(savedPet);
    res.redirect("/");
};

module.exports.renderShowRoute = async (req, res) => {
    let { id } = req.params;
    const pet = await petModel.findById(id);
    res.render("pets/show.ejs", { pet });
};



module.exports.renderEditForm = async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("/user/login");
    }
    else {
        let { id } = req.params;
        const pet = await petModel.findById(id);
        res.render("pets/edit.ejs", { pet });
    }
};


module.exports.renderUpdatePet = async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("/user/login");
    }
    else {
        let { id } = req.params;
        const pet = await petModel.findById(id);
        await petModel.findByIdAndUpdate(id, { ...req.body.pet }, { new: true });
        res.redirect(`/pets/${id}`);
    }
};

module.exports.renderDeletePet = async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("/user/login");
    }
    else {
        let { id } = req.params;
        const pet = await petModel.findByIdAndDelete(id);
        console.log("pet deleted successfully");
        res.redirect("/pets/ourPet");
    }
};
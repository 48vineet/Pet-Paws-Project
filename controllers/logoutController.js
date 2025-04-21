module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        } else {
            res.redirect("/");
        }
    });
};
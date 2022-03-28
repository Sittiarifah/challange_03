const { Router } = require("express");
const satpam = require("./middleware/AuthMiddleware");
const petugas = require("./middleware/featmiddleware");

const router = Router();

router.get ("/", satpam, (req, res) => {
res.render("dashboard")
});

router.post("/login", (req, res) => {
    res.cookie("token", "token123");
    res.render("dashboard")
});

router.get("/listcar", petugas, (req, res) => {
    res.render("listcar");
});

router.post("/listcar", (req, res) => {
    res.cookie("token")
    res.render("listcar")
});

module.exports = router;
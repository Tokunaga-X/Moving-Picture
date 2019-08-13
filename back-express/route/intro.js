const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

router.get("/tourist", (req, res) => res.render("tourist"));

router.get("/owner", ensureAuthenticated, (req, res) => res.render("owner"));

module.exports = router;

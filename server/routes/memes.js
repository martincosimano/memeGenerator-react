const express = require("express");
const router = express.Router();
const memeController = require("../controllers/memes");

router.get("/", memeController.getAllMemes);

module.exports = router;
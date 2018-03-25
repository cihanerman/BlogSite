var express = require("express");
var router = express.Router();
var homeCtrl = require("../controllers/HomeController.js");

router.get("/",homeCtrl.index);

module.exports = router;
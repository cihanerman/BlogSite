var express = require("express");
var router = express.Router();
var adminCtrl = require("../controllers/AdminController.js");

router.get("/admin",adminCtrl.login);
router.post("/admin",adminCtrl.successLogin);
router.post("/admin/delete",adminCtrl.postDelete);

module.exports = router;
var express = require("express");
var router = express.Router();
var postCtrl = require("../controllers/PostController.js");

router.get("/post",postCtrl.index);
router.post("/post",postCtrl.addPost);

module.exports = router;
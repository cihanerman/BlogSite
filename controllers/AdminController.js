var Blog = require("../models/Blog.js");

module.exports.login = function (req, res) {
	res.render("adminLogin");
}

module.exports.successLogin = function (req, res) {
	var adminName = cihan;
	var adminPassw = 1234;

	if (adminName === req.body.adminName && adminPassw === req.body.adminPassw) {
		res.render("adminHome");
	} else {
		res.render("adminLogin");
	}
}

module.exports.postDelete = function (req, res) {
	Blog.findOneAndRemove({id: req.params.id});
	res.redirect("adminHome");
}
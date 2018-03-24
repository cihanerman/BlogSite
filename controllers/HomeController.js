var Blog = require("../models/Blog.js");

module.exports.index = function (req, res) {
	Blog.find(function (req, results) {
		res.render("index",{posts: results});
	});
}
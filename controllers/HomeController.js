var Blog = require("../models/Blog.js");

module.exports.index = function (req, res) {
	Blog.find(function (err, results) {
		if (err) throw err;
		
		res.render("index",{
			posts: results
		});
	});
}
var Blog = require("../models/Blog.js");

module.exports.addPost = function (req, res) {
	var post = new Blog({
		header: req.body.header,
		content: req.body.content,
		author: req.body.author
	});

	post.save(function (err) {
		if (err) console.log(err);
	});

	res.res.redirect("index");
}

module.exports.index = function (req, res) {
	res.render("addPost");
}
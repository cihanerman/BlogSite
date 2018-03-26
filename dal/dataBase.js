var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

var DbUrl = "mongodb://localhost/blogSite";

mongoose.connect(DbUrl, function (err) {
	if (err) {
		console.log("Hata: " + err);
	} else {
		console.log("Veri tabanına bağlanıldı.");
	}
});
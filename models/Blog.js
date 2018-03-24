var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var blogSchema = new Schema({
	header:{
		type:String,
		require:true,
	},
	content:{
		type:String,
		require:true,
	},
	author:{
		type:String,
		require:true
	}
});

var blog = mongoose.model("blog",blogSchema);

module.exports = blog;
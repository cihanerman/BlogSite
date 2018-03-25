var homeRouter = require("./homeRouter.js");
var adminRouter = require("./adminRouter.js");
var postRouter = require("./postRouter.js");

module.exports = function (app) {
	app.use("/",homeRouter);
	app.use("/post",postRouter);
	app.use("/admin",adminRouter);
}
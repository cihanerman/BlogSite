var express = require("express");
var path = require("path");
var layout = require("express-ejs-layouts");
var parser = require("body-parser");
var db = require("./dal/dataBase.js");
var app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(parser.urlencoded({ extended : false }));
app.use(parser.json());

app.use(layout);

app.use("./public", express.static(path.join(__dirname, "public")));

require("./routers/mainRouter.js")(app);
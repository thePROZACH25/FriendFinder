var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

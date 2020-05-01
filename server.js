// Dependencies
var express = require("express");
var path = require("path");

// Sets up Express
var app = express();
var PORT = process.env.PORT || 8000;

// Express Data Parsing Capabilities
app.use(express.urlencoded({ extended: ture }));
app.use(express.json());

// Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

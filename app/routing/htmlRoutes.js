// Dependency
var path = require("path");

module.exports = function(app){
    
    // Grabs the survey file to post to the window
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // Grabs the home file to post to the window
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
}
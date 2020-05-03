// Require data from friends.js
var friendsData = require("../data/friends.js");

// Routing
module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    
    var body = res.req.body
    var userScore = body.scores;
    console.log("Back: " + userScore)
    var scoresArr = [];
    var bestMatch = 0;

    for (var i = 0; i < friendsData.length; i++) {
      var scoreDiff = 0;

      for (var j = 0; j < userScore.length; j++) {
        scoreDiff = Math.abs(
          parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])
        );
      }
      scoresArr.push(scoreDiff);
    }
    for (var i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]) {
        bestMatch = i;
      }
    }

    var soulMatch = friendsData[bestMatch];
    res.json(soulMatch);

    console.log(body);
    friendsData.push(body);
  });
};

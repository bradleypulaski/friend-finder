var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./../data/friends.js");
// Sets up the Express app to handle data parsing
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(function (req, resp, next) {
	next();
});

router.get("/api/friends", function(req, res) {
  res.json(friends.getFriends());
});

router.post("/api/friends", function(req, res) {
   var friend = req.body;
   friend.scores = friend.scores.split(",");
   friends.addFriend(friend);
   res.end(JSON.stringify(friends.getMatch(friend)));
 });

module.exports = router;
 
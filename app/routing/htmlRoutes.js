var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./../data/friends.js");
// Sets up the Express app to handle data parsing
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var appDir = path.dirname(require.main.filename);
 




router.use(function (req, resp, next) {
  next();
});

 
 
 
router.get("/", function(req, res) {
  res.sendFile(path.join(appDir + "/app/public/home.html"));
});
router.get("/survey", function(req, res) {
  res.sendFile(path.join(appDir + "/app/public/survey.html"));
});
module.exports = router;

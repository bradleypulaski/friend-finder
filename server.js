var express = require("express");
var app = express();
app.use(require("./app/routing/apiRoutes.js"));
app.use(require("./app/routing/htmlRoutes.js"));
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function() {
  console.log("app listening at port: " + PORT);
});

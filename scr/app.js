const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("under develop section \n");
});

app.listen(8080, function () {
  console.log("app listening on port localhost:8080");
});

module.exports = app;

console.log("Hell world \n");

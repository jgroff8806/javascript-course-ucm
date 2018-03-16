// Create a variable called express
// Notify the app that it needs express framework
var express = require("express");
// Bootstrap the app to express
var app = express();
// Run this app on port 3000
var port = 3000;

// Binding root context that is localhost:3000
// to get method that responds with index.html file
// req - HTTP request made by client
// res - HTTP response
app.get("/", (req, res) => {
  // sendFile is a method in express framework that sends file back
  // to the client
  res.sendFile(__dirname + "/index.html");
});

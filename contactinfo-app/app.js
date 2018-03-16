// Create a variable called express
// Notify the app that it needs express framework
var express = require("express");
// Bootstrap the app to express
var app = express();
// Run this app on port 3000
var port = 3000;

// Create a variable called mongoose
// Notify the app that it needs mongoose framework
var mongoose = require("mongoose");
// Connect the app to the db in the specified location
mongoose.connect("mongodb://localhost:27017/contact-app");

var contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

// Binding root context that is localhost:3000
// to get method that responds with index.html file
// req - HTTP request made by client
// res - HTTP response
app.get("/", (req, res) => {
  // sendFile is a method in express framework that sends file back
  // to the client
  res.sendFile(__dirname + "/index.html");
});

// Informing your app to listen to port number you have provided on top
app.listen(port, () => {
  console.log("Server listening on port " + port);
});

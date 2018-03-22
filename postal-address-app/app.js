var express = require("express");
var app = express();
var port = 3000;

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/postal-address-app");

// Inform the app use ejs as its view engine
app.set("view engine", "ejs");

var postalAddressSchema = new mongoose.Schema({
  fullName: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  region: String,
  postalCode: String,
  country: String,
  created_at: { type: Date, default: Date.now() }
});

var PostalAddress = mongoose.model("PostalAddressApp", postalAddressSchema);

app.get("/", (req, res) => {
  PostalAddress.find((err, result) => {
    // If unable to get results
    // log the error to the console
    if (err) return console.log(err);
    // If success render index.ejs and assign results to
    // a templating variable named address that we can access
    // in index.ejs
    res.render("index.ejs", { address: result });
  });
});

// Get request for style.css file
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.post("/savePostalAddress", (req, res) => {
  var addressData = new PostalAddress(req.body);
  addressData
    .save()
    .then(item => {
      res.send("Info saved to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

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
mongoose.connect("mongodb://localhost:27017/compact-contact-form");

// Inform the app use ejs as its view engine
app.set("view engine", "ejs");

var compactContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  message: String,
  created_at: { type: Date, default: Date.now() }
});
var CompactContact = mongoose.model("CompactContactApp", compactContactSchema);

app.get("/", (req, res) => {
  CompactContact.find((err, result) => {
    // If unable to get results
    // log the error to the console
    if (err) return console.log(err);
    // If success render index.ejs and assign results to
    // a templating variable named contacts that we can access
    // in index.ejs
    res.render("index.ejs", { contacts: result });
  });
});

// Get request for style.css file
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.post("/saveCompactContact", (req, res) => {
  var contactData = new CompactContact(req.body);
  contactData
    .save()
    .then(item => {
      res.redirect("/displayResults");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

// Query to find property of CompactContact schema and display
// the filtered results on a seperate page
app.get("/displayResults", (req, res) => {
  CompactContact.find({ firstName: "John" }, (err, result) => {
    if (err) return console.log(err);
    res.render("results.ejs", { contacts: result });
  });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

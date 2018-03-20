var express = require("express");
var app = express();
var port = 3000;

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

var compactContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  created_at: { type: Date, default: Date.now() }
});
var Contact = mongoose.model("ContactInfo", compactContactSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.post("/saveContactInfo", (req, res) => {
  console.log("My request" + req);
  console.log("My request body" + req.body);
  var myContactData = new Contact(req.body);
  myContactData
    .save()
    .then(item => {
      res.send("Name saved to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

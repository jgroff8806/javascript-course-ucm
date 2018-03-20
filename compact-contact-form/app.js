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
mongoose.connect("mongodb://localhost:27017/contact-app");

var contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  created_at: { type: Date, default: Date.now() }
});
var Contact = mongoose.model("ContactInfo", contactSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.post("/saveContact", (req, res) => {
  console.log("My request" + req);
  console.log("My request body" + req.body);
  var myData = new Contact(req.body);
  myData
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

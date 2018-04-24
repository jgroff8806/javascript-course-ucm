var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var task = new Schema({
  task: String,
  description: String
});

module.exports = mongoose.model("TaskModel", task);

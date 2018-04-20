var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Task Tracker" });
});

/* GET tasklist page. */
router.get("/tasklist", function(req, res) {
  var db = req.db;
  var collection = db.get("usercollection");
  collection.find({}, {}, function(e, docs) {
    console.log(docs);
    res.render("tasklist", {
      title: "Task List",
      tasklist: docs
    });
  });
});

/* GET New TASK page. */
router.get("/addtask", function(req, res) {
  res.render("addtask", { title: "Add New Task" });
});

// Search //

// POST to Add Task Service //
router.post("/addtask", function(req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var taskName = req.body.taskname;
  var taskDesc = req.body.taskdesc;

  // Set our collection
  var collection = db.get("usercollection");

  // Submit to the DB
  collection.insert(
    {
      task: taskName,
      description: taskDesc
    },
    function(err, doc) {
      if (err) {
        // If it failed, return error
        res.send("There was a problem adding the information to the database.");
      } else {
        // And forward to success page
        res.redirect("tasklist");
      }
    }
  );
});

// Remove Task
router.post("/removetask", function(req, res) {
  if (err) throw err;
  var db = db.db("taskTrackerApp");
  var myQuery = { tasklist: _id };
  db.collection("tasks").deleteOne(myQuery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

module.exports = router;

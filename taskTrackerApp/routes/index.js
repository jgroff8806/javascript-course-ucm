var express = require("express");
var router = express.Router();
var TaskModel = require("../models/taskmodel");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Task Tracker" });
});

/* GET tasklist page. */
router.get("/tasklist", function(req, res) {
  TaskModel.find(function(err, tasks) {
    if (err) {
      res.status(500).send({ message: "error getting tasks" });
    }
    res.render("tasklist", {
      title: "Task List",
      tasks: tasks
    });
  });
});

// Remove Task
router.get("/removetask", function(req, res) {
  var db = req.db;
  var collection = db.get("usercollection");
  db.remove.collection({ _id: task });
});

/* GET New TASK page. */
router.get("/addtask", function(req, res) {
  res.render("addtask", { title: "Add New Task" });
});

// Update Task
router.get("/update/:id", function(req, res) {
  TaskModel.findById(req.params.id, function(err, task) {
    if (err) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.render("update", { task: task });
  });
});

router.post("/updatetask:id", function(req, res) {
  var id = req.params.id;
  var name = req.body.task;
  var description = req.body.desc;

  TaskModel.findByIdAndUpdate(id, { task: name, description: description }, function(err, tasks) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Some error occurred while retrieving Tasks." });
    } else {
      //res.send(tasks);
      res.redirect("tasklist");
    }
  });
  res.send("test test test");
});

// POST to Add Task Service //
router.post("/addtask", function(req, res) {
  // Set our internal DB variable
  // var db = req.db;

  // Get our form values. These rely on the "name" attributes
  //var taskName = req.body.taskname;
  //var taskDesc = req.body.taskdesc;

  var newTask = new TaskModel({ task: req.body.taskname, description: req.body.taskdesc });

  newTask.save(function(err) {
    if (err) {
      res.send("There was a problem adding the information to the database.");
    }

    res.redirect("tasklist");
  });

  // Set our collection
  // var collection = db.get("usercollection");

  // Submit to the DB
  // collection.insert(
  //   {
  //     task: taskName,
  //     description: taskDesc
  //   },
  //   function(err, doc) {
  //     if (err) {
  //       // If it failed, return error
  //       res.send("There was a problem adding the information to the database.");
  //     } else {
  //       // And forward to success page
  //       res.redirect("tasklist");
  //     }
  //   }
  // );
});

module.exports = router;

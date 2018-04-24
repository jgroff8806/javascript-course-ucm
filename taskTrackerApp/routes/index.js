var express = require("express");
var router = express.Router();
var TaskModel = require("../models/taskmodel");

// GET home page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Task Tracker" });
});

// GET tasklist page
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
router.post("/removetask/:id", function(req, res) {
  console.log("wtf");
  console.log(req.params.id);
  TaskModel.findByIdAndRemove(req.params.id, function(err, task) {
    if (err) {
      console.log(err);
      if (err) {
        return res.status(500).send({ message: "Could not delete task with id " + req.params.id });
      }
    }

    if (!task) {
      return res.status(404).send({ message: "Task not found with id " + req.params.id });
    }

    res.render("success", { message: "Task deleted successfully!" });
  });
});

// GET New TASK page
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

router.post("/updatetask/:id", function(req, res) {
  const id = req.params.id;
  const name = req.body.task;
  const description = req.body.desc;

  TaskModel.findByIdAndUpdate(id, { task: name, description: description }, function(err, task) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Some error occurred while retrieving Tasks." });
    } else {
      res.redirect("/tasklist");
    }
  });
});

// POST to Add Task Service
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

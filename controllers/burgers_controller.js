var express = require("express");

var router = express.Router();

// import the model to use its database functions
var burger = require("../models/burger.js");

router.get("/", function (req, result) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    result.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (request, response) {
  burger.create([
    "burger_name"
  ], [
      request.body.burger_name
    ], function (result) {
      console.log("added burger");
      response.end();
      //  request.redirect("/");
      // result.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (request, res) {
  var condition = "id = " + request.params.id;
  burger.update({
    devoured: request.body.devoured
  }, condition, function (result) {
    console.log("devoured " + request.body.devoured);
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export routes for server.js to use
module.exports = router;
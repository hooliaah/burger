var express = require("express");
var router = express.Router();

// import the model to use its database functions
var burger = require("../models/burger.js");

// get all records using the burger model .all function
router.get("/", function (req, result) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    result.render("index", hbsObject);
  });
});

// post a new record using the burger model .create function
router.post("/api/burgers", function (request, response) {
  burger.create([
    "burger_name"
  ], [
      request.body.burger_name
    ], function (result) {
      response.end();
    });
});

// update "devoured" state using burger model .update function
router.put("/api/burgers/:id", function (request, res) {
  var condition = "id = " + request.params.id;
  burger.update({
    devoured: request.body.devoured
  }, condition, function (result) {
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
var express = require("express");

var router = express.Router();

// import the model to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
         res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req,res){
    burger.create([
      "burger_name"
    ],[
      req.body.burger_name
    ], function(res){
      res.json({ id: result.insertID });
    });
  });

// export routes for server.js to use
module.exports = router;
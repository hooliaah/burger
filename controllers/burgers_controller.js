var express = require("express");

var router = express.Router();

// import the model to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/", function(req, res) {
//     burger.create([
//         ""
//     ])
// })

// export routes for server.js to use
module.exports = router;
var express = require("express");

var router = express.Router();

// import the model to use its database functions
var cat = require("../models/burger.js");

// export routes for server.js to use
module.exports = router;
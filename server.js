// require all packages needed
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser')
var path = require('path');
var exphbs = require("express-handlebars");

// define port variable
var PORT = process.env.PORT || 8080;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

// set up handlebars, define detault layout
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// allow files in public folder to be accessible by client
app.use(express.static(path.join(__dirname, 'public' )));

// require routes in controller
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
})
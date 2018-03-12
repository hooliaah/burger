// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// create the burger model
var burger = {
    // define the burger.all function that relies on the orm.all function
    all: function (callback) {
        orm.all("burgers", function (result) {
            callback(result);
        });
    },
    // define the burger.create function that relies on the orm.create function
    create: function (columns, values, callback) {
        orm.create("burgers", columns, values, function (result) {
            callback(result);
        });
    },
    // define the burger.update function that relies on the orm.update function
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(result) {
            callback(result);
        });
    }
};

// export the burger model
module.exports = burger;
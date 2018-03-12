// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (result) {
            callback(result);
        });
    },
    create: function (columns, values, callback) {
        orm.create("burgers", columns, values, function (result) {
            callback(result);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;
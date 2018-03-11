// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.all("burgers", function (res) {
            callback(res);
        });
    },
    create: function (columns, values, callback) {
        orm.create("burgers", columns, values, function (res) {
            callback(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
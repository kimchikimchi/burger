/*
Inside burger.js, import orm.js into burger.js
Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
*/
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    create: function(colsVols, callback) {
        orm.insertOne("burgers", colsVols, function(res) {
            callback(res);
        });
    },
    update: function(colsVols, qualifiers, callback) {
        orm.updateOne("burgers", colsVols, qualifiers, function(res) {
            callback(res);
        });
    },
};

module.exports = burger;

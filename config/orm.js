/*
 create the methods that will execute the necessary MySQL commands in the controllers.
 These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

*/
var connection = require("./connection.js");

var selectAll = function(table, callback) {
    var query = `SELECT * FROM ?`;
    connection.query(query, [table], function(err, result) {
        if (err) {
            throw err;
        }
        calback(result);
    });
};

var insertOne = function(table, setColsVols, callback) {
    var query = "INSERT INTO ? SET ?";
    connection.query(query, [table, setColsVols], function(err, result) {
        if (err) {
            throw err;
        }
        calback(result);
    });
};

var updateOne = function(table, setColsVols, qualifiers, callback) {
    var query = "UPDATE ? SET ? WHERE ?"
    connection.query(query, [table, setColsVols, qualifiers], function(err, result) {
        if (err) {
            throw err;
        }
        calback(result);
    });
}

var orm = {
    selectAll: selectAll,
    insertOne: insertOne,
    updateOne: updateOne,
};

// Export the ORM object in module.exports.
module.exports = orm;

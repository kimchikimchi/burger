/*
import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file.
*/
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Renders the main web page with list
router.get("/", function(req, res) {
    burger.all(function (result) {
        //console.log(result);
        res.render("index", { burgers: result });
    });
});

//
router.post("/api/burgers", function(req, res) {
    burger.create({
        burger_name: req.body.burger_name
        //devoured: req.body.devoured
    }, function (result) {
        // Send back the ID of the new burgers
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update({
        // Convertin string to boolean
        devoured: (req.body.devoured == 'true')
    }, {
        id: req.params.id
    }, function (result) {
        //console.log(result);
        if (result.affectedRows == 0) {
            // supplied ID doesn't exist.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;

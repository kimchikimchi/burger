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
    console.log("Hitting get");
});

//
router.post("/api/burgers", function(req, res) {
    console.log("Hitting post");
});

router.put("/api/burgers/:burger", function(req, res) {
    console.log("Hitting put");
});

// Export routes for server.js to use.
module.exports = router;

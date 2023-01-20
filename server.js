/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: DHRUVIN BHARATBHAI RAIYANI Student ID: 144683216 Date: 20-01-2023S
*
*  Cyclic Web App URL: ______________________________________________________
*
*  GitHub Repository URL: _____________________________________________________
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("DHRUVIN BHARATBHAI RAIYANI - 144683216");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
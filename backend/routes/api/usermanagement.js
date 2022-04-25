require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Professor = require("./models/Professor.js");
const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/usermanagement', function (req, res) {
    res.sendFile(__dirname + '/usermanagement.html');
});

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

app.post('/login', (req, res) => {
    let username1 = req.body.username;
    let password1 = req.body.password
    User.findOne({ username: username1 }, function (err, user) {
        if (err) throw err
        // checks if the password matches
        user.comparePassword(password1, function (err, isMatch) {
            if (err) throw err
            if ((password1, isMatch)) res.sendFile(__dirname + '/dashboard.html');
            else res.redirect("/");
        });
    });


});


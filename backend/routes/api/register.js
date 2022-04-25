require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require("../../models/User");
const Professor = require("../../models/Professor");
const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

app.use(bodyParser.urlencoded({ extended: false }));

router.post("/register", async function (req, res) {
    try {
    var newUser = new User({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        student_id: req.body.student_id,
        email: req.body.email,
        id: req.body.username,

        // student
        access: 4,
        courses_reg: req.body.course.split(" ")
    });

    User.findOne({ username: req.body.username }, function (err, repeatUser) {
        if (err) {
            console.log(err);
        }
        else
            console.log("This username is already in use. Please choose another.");
    }
            });

    User.findOne({ email: req.body.email }, function (err, repeatUser) {
    if (err) {
    }
    else {
        console.log("This email is already in use. Please choose another.");
    }
});

User.findOne({ student_id: req.body.student_id }, function (err, repeatUser) {
    if (err) {
    }
    else {
        console.log("This Student ID is already in use. Please correct your input or contact technical support.");
    }
});


newUser.save(function (err) {
    if (err) throw err;
    newUser.save().then(() => console.log("Successfully registered!"));
    res.sendFile(__dirname + '/dashboard.html');

});

});

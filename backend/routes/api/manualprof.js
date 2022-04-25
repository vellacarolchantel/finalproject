require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Professor = require("./models/Professor.js");
const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");

app.get('/manualprof', function (req, res) {
    res.sendFile(__dirname + '/manualprof.html');
});

app.post('/manualprof', (req, res) => {

    const names = req.body.full_name.split(" ");
    console.log(names[0]);
    console.log(names[1]);
    var userID = req.body.full_name
    var newProf = new Professor({
        ratings_given: req.body.ratings_given,
        curr_courses: req.body.curr_courses.split(" "),
        name: req.body.full_name,
        id: userID,
    });


    User.findOne({ first_name: names[0], last_name: names[1] }, function (err, profUser) {
        if (err) {
            console.log(err);
            // I should add something that adds a new user if the Professor isn't there.
        }
        else {
            // Looks in the User database and sets the Professor's ID as
            // the hashed value found there.
            console.log("Result : " + profUser.id);
            newProf.id = profUser.id;
        }
    });


    newProf.save(function (err) {
        if (err) throw err;
        newProf.save().then(() => console.log("Successfully added Prof!"));
        res.sendFile(__dirname + '/dashboard.html');

    });



});

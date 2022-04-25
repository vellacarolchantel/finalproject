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


app.get('/importCSV', function (req, res) {
    res.sendFile(__dirname + '/importCSV.html');
});

app.post('/importCSV', (req, res) => {
    csvtojson()
        .fromFile("TACohort.csv")
        .then(csvData => {
            console.log(csvData);
            mongodb.connect(
                process.env.MONGODB_URI,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, client) => {
                    if (err) throw err;
                    client
                        .db("FINALPROJECT")
                        .collection("tas")
                        .insertMany(csvData, (err, res) => {
                            if (err) throw err;
                            console.log(`Inserted: ${res.insertedCount} TAs`);
                            client.close();
                        }, { ordered: true });
                }
            );
        });

});


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


mongoose
    .connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        app.use(express.json())
        app.use("/api", require("./routes/api"))

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/login.html');
        });

        app.get('/logout', function (req, res) {
            res.redirect("/");
        });
       

        app.listen(5000, () => {
            console.log("Server has started!")
        });
    });

   


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

        app.get('/register', function (req, res) {
            res.sendFile(__dirname + '/register.html');
        });

        app.post('/register', (req, res) => {
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

            User.findOne({ username: req.body.username}, function (err, repeatUser) {
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

        app.post('/login', (req, res) => {
            let username1 = req.body.username;
            let password1 = req.body.password;
            //   res.send(`Username: ${username1} Password: ${password1}`);
            User.findOne({ username: username1 }, function (err, user) {
                if (err) throw err
                // test a matching password
                user.comparePassword(password1, function (err, isMatch) {
                    if (err) throw err
                    if ((password1, isMatch)) res.sendFile(__dirname + '/dashboard.html');
                    else res.redirect("/");
                });
            });


        });

        app.post('/rateTA', (req, res) => {
            //res.send(req.body.ratingnumber);
            res.send("Rating: " + req.body.ratingnumber + "<p></p>" + req.body.review);
            // console.log(req.body.ratingnumber);
            //console.log(req.body.review);

        });

        app.get('/rateTA', function (req, res) {
            res.sendFile(__dirname + '/dashboard.html');
        });

        app.get('/manageusers', function (req, res) {
            res.sendFile(__dirname + '/manageusers.html');
        });

        app.get('/importCSV', function (req, res) {
            res.sendFile(__dirname + '/importCSV.html');
        });

        app.get('/manualprof', function (req, res) {
            res.sendFile(__dirname + '/manualprof.html');
        });

        app.post('/manualprof', (req, res) => {

            const names = req.body.full_name.split(" ");
            console.log(names[0]);
            console.log(names[1]);
            var userID = req.body.full_name;
           // const userFIND = User.findOne({ first_name: 'Peter' });
          //  console.log(User.find({}));

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
                                }, {ordered:true});
                        }
                    );
                });

        });


        app.listen(5000, () => {
            console.log("Server has started!")
        });
    });

   


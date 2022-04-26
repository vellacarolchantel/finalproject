require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Ta = require("./models/Ta.js");
const Course = require("./models/Course.js");
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
            res.sendFile(__dirname + '/manualtesting/login.html');
        });


        app.get('/dashboard', (req, res) => {
            res.sendFile(__dirname + '/manualtesting/dashboard.html');
        });

        app.get('/logout', function (req, res) {
            res.redirect("/");
        });

        app.get('/register', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/register.html');
        });

        app.post('/register', (req, res) => {
            var newUser = new User({
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                student_id: req.body.student_id,
                email: req.body.email,
                id: req.body.id,

                // student
                access: 4,
                courses_reg: req.body.course.split(" ")
            });

            User.findOne({ username: req.body.username }, function (err, repeatUser) {
                if (err) {
                    console.log(err);
                }
                else {
                    //console.log("This username is already in use. Please choose another.");
            }
            });

        User.findOne({ email: req.body.email }, function (err, repeatUser) {
            if (err) {
            }
            else {
                //console.log("This email is already in use. Please choose another.");
            }
        });

        User.findOne({ student_id: req.body.student_id }, function (err, repeatUser) {
            if (err) {
            }
            else {
             //console.log("This Student ID is already in use. Please correct your input or contact technical support.");
            }
        });


        newUser.save(function (err) {
            if (err) throw err;
            newUser.save().then(() => console.log("Successfully registered!"));
            res.sendFile(__dirname + '/manualtesting/dashboard.html');

        });

    });



        app.get('/manageusers', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manageusers.html');
        });

        app.post('/addusers', (req, res) => {
            var newUser = new User({
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                student_id: req.body.student_id,
                email: req.body.email,
                id: req.body.id,

                // student
                access: 4,
                courses_reg: req.body.course.split(" ")
            });

            User.findOne({ username: req.body.username }, function (err, repeatUser) {
                if (err) {
                    console.log(err);
                }
                else {
                    //console.log("This username is already in use. Please choose another.");
                }
            });

            User.findOne({ email: req.body.email }, function (err, repeatUser) {
                if (err) {
                }
                else {
                    //console.log("This email is already in use. Please choose another.");
                }
            });

            User.findOne({ student_id: req.body.student_id }, function (err, repeatUser) {
                if (err) {
                }
                else {
                    //console.log("This Student ID is already in use. Please correct your input or contact technical support.");
                }
            });


            newUser.save(function (err) {
                if (err) throw err;
                newUser.save().then(() => console.log("Successfully added user!"));
                res.sendFile(__dirname + '/manualtesting/manageusers.html');

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
            if ((password1, isMatch)) res.sendFile(__dirname + '/manualtesting/dashboard.html');
            else res.redirect("/");
        });
    });


});

app.post('/rateTA', (req, res) => {
    //res.send(req.body.ratingnumber);
  //  res.send("Rating: " + req.body.ratingnumber + "<p></p>" + req.body.review);
    res.sendFile(__dirname + '/manualtesting/dashboard.html');

});

 app.post('/deleteusers', (req, res) => {



            User.findOneAndDelete({ first_name: req.body.first_name, last_name: req.body.last_name, username: req.body.username }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
                
            });


            User.findOneAndDelete({ first_name: req.body.first_name, last_name: req.body.last_name, username: req.body.username, email: req.body.email, student_id: req.body.student_id }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
              
            });
            User.findOneAndDelete({ first_name: req.body.first_name, last_name: req.body.last_name }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
              
            });


            User.findOneAndDelete({ first_name: req.body.first_name}, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
              
            });


            User.findOneAndDelete({ last_name: req.body.last_name }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
               
            });


            User.findOneAndDelete({ username: req.body.username }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
             
            });

            User.findOneAndDelete({ student_id: req.body.student_id }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }
               
            });

            User.findOneAndDelete({email: req.body.email}, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }

            });





            res.sendFile(__dirname + '/manualtesting/manageusers.html');


        });


        app.post('/editusers', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manageusers.html');
        });

app.get('/rateTA', function (req, res) {
    res.sendFile(__dirname + '/manualtesting/dashboard.html');
});

app.get('/manageusers', function (req, res) {
    res.sendFile(__dirname + '/manualtesting/manageusers.html');
});

app.get('/importCSV', function (req, res) {
    res.sendFile(__dirname + '/manualtesting/importCSV.html');
});

app.get('/manualprof', function (req, res) {
    res.sendFile(__dirname + '/manualtesting/manualprof.html');
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
        res.sendFile(__dirname + '/manualtesting/dashboard.html');

    });



});

        app.get('/manualcourse', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manualcourse.html');
        });

        app.post('/manualcourse', (req, res) => {

            var newCourse = new Course({
                course_num: req.body.course_num,
                term_month_year: req.body.term_month_year,
                course_name: req.body.course_name,
                course_type: req.body.course_type,
                TA_quota: req.body.TA_quota,
                instructor_name: req.body.instructor_name,
                enrollment_num: req.body.enrollment_num,
                wishlist: req.body.tawishlist.split(" "),
                tas: req.body.tasids.split(" "),
                ta_names: req.body.tasnames.split(","),
            });

            newCourse.save(function (err) {
                if (err) throw err;
                newCourse.save().then(() => console.log("Successfully added Course!"));
                res.sendFile(__dirname + '/manualtesting/manualcourse.html');

            });



        });

app.get('/importCSV', function (req, res) {
    res.sendFile(__dirname + '/manualtesting/importCSV.html');
});

app.post('/importCSV', (req, res) => {
    csvtojson()
    .fromFile("testcsv.csv")
        .then(csvData => {
            console.log(csvData);
            mongodb.connect(
                process.env.MONGODB_URI,
                { useNewUrlParser: true, useUnifiedTopology: true },
                (err, client) => {
                    if (err) throw err;
                    client
                        .db("FINALPROJECT")
                        .collection("courses")
                        .insertMany(csvData, (err, res) => {
                            if (err) throw err;
                            console.log(`Inserted: ${res.insertedCount} Courses`);
                            client.close();
                           
                        }, { ordered: true });
                }
            );
        })
    res.sendFile(__dirname + '/manualtesting/importCSV.html')

});


app.listen(5000, () => {
    console.log("Server has started!")
});
    });




/* needs to be refactored to connect to the frontend


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


            User.findOneAndDelete({ first_name: req.body.first_name }, function (err, deletedUser) {
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

            User.findOneAndDelete({ email: req.body.email }, function (err, deletedUser) {
                if (err) {
                    return console.log(err);
                }

            });





            res.sendFile(__dirname + '/manualtesting/manageusers.html');


        });


        app.post('/editusers', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manageusers.html');
        });
        
        
        
        app.get('/manageusers', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manageusers.html');
        });
        
        */


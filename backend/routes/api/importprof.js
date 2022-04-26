/* needs to be refactored to connect to the frontend

app.get('/manualprof', function (req, res) {
            res.sendFile(__dirname + '/manualtesting/manualprof.html');
        });

        app.post('/manualprof', (req, res) => {

            const names = req.body.full_name.split(" ");
            console.log(names[0]);
            console.log(names[1]);
            var userID = req.body.full_name;
            
            var newProf = new Professor({
                ratings_given: req.body.ratings_given,
                curr_courses: req.body.curr_courses.split(" "),
                name: req.body.full_name,
                id: userID,
            });


            User.findOne({ first_name: names[0], last_name: names[1] }, function (err, profUser) {
                if (err) {
                    console.log(err);
                 }
                else {
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

       
*/

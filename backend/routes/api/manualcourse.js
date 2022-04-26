/* needs to be refactored to connect to the frontend 

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
*/

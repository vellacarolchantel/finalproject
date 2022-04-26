/* needs to be refactored to connect to the frontend

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

*/

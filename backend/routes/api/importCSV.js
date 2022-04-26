/* needs to be refactored to connect to the frontend


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
        
        */

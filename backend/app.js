require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

mongoose
    .connect(
        process.env.MONGODB_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then( () => {
		const app = express();
        app.use(express.json())
        app.use(cookieParser()) 
        var distDir = __dirname + "/dist/";
        app.use(express.static(distDir));

        app.use("/api", require('./routes/api'));
        
		app.listen(process.env.PORT || 5000, () => {
			console.log("Server has started!")
		})
	});


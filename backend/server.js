// Code taken from geeks for geeks
const express = require("express");
const server = express();
  
create = function (config) {
      
    // Get routes from routes directory
    let routes = require('./routes/api');
  
    // Configure the server settings
    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);
  
    // Returns middleware that parses json
    server.use(bodyParser.json());
  
    // Set up routes for the server
    routes.init(server);
};
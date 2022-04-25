const express = require("express");
const server = express.Router();

//app.use("/",router);
server.use('ta_admin', require('./api/ta_admin'));
server.use('ta_management', require('./api/ta_management'));
server.use('importCSV', require('./api/importCSV'));
server.use('login', require('./api/login'));
server.use('manualprof', require('./api/manualprof'));
server.use('rateta', require('./api/rateta'));
server.use('register', require('./api/register'));
server.use('usermanagement', require('./api/usermanagement'));



server.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = server;

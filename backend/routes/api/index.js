const express = require("express");
const server = require('express').Router();


//app.use("/",router);
server.use('/ta_admin', require('./ta_admin'));
server.use('/ta_management', require('./ta_management'));

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

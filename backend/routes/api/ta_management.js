const csvtojson = require("csvtojson");
const express = require("express");
const router = require('express').Router();
const mongoose = require('mongoose');
const Ta = require("./../../models/Ta")
const Course = require("./../../models/Course")

// error function
function error(message){
    return "Error : " + message;
} 
const course = null;

// select course
router.get('/course', async function (req, res) {
    try {
        course = await Course.find({student_id : req.body.student_id}).select("-student_ratings").then (res => {
        res.send(course);   
        });
    }catch (error) {
        response.status(500).send(error);
    }
});


// TA performance log feature 
router.post('/course/performance', async function (req, res) {
    try{
        if(course == null){
            response.status(500).send(error);
        }else{
            // find the appropriate TA
            const ta = await Ta.find({student_id : req.body.student_id}, {ta_name: req.body.ta_name})
            
        }

    }catch (error) {
        response.status(500).send(error);
    }

});
// TA wish-list feature
router.post('/course/wishlist', async function (req, res) {
    try{


    }catch (error) {
        response.status(500).send(error);
    }

});
module.exports = router;

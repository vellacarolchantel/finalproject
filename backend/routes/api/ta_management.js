const csvtojson = require("csvtojson");
const express = require("express");
const router = require('express').Router();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Ta = require("./../../models/Ta");
const Course = require("./../../models/Course");
const PReport = require("./../../models/PReport");

// select course
router.get('/course', async function (req, res) {
    try {
        const course = await Course.findOne({ course_num: req.body.course_num, course_type : req.body.course_type }, {});
        res.cookie('course_num', req.body.course_num);
        res.cookie('course_type', req.body.course_type);
        res.send(course);
        res.status(200);

    }catch (error) {
        res.status(500).send(error);
    }
});

// TA wish-list feature
router.post('/course/wishlist', async function (req, res) {
    try{
        course_num = req.cookies['course_num'];
        course_type = req.cookies['course_type'];
        const course = await Course.findOne({course_type : course_type, course_num : course_num}, {});
        
        if(!course){
            res.status(500).send(error);
        }else{
            const ta = await Ta.findOne({student_id : req.body.student_id});
            let list = course.wishlist;
            let updated_wishlist = ta.wishlist;
            if(list.includes(ta.student_id)){
                res.status(500).send("Ta is already included in wishlist");
            }else{
                // Updating Prof's Course Wishlist
                list.push(ta.student_id);
                await Course.findOneAndUpdate({ course_num: course.course_num, course_type : course.course_type}, {wishlist : list});
                
                // Updating the Ta's Wishlist 
                let new_addition  = [];
                new_addition.push(course.course_type + " " + course.course_num);
                new_addition.push(course.instructor_name);
                updated_wishlist.push(new_addition)
                await Ta.findOneAndUpdate({student_id : ta.student_id},{wishlist : updated_wishlist});
            }
            res.status(200).send("Success");
        }
    }catch (error) {
        res.status(500).send(error);
    }

});

// TA performance log feature 
router.post('/course/performance', async function (req, res) {
    try{
        // find the course 
        course_num = req.cookies['course_num'];
        course_type = req.cookies['course_type'];
        const course = await Course.findOne({course_type : course_type, course_num : course_num}, {});
        
        // find the appropriate TA
        const ta = await Ta.findOne({ta_name: req.body.ta_name});
        const comment = req.body.comment;

        // add the comment to the performance_log
        const newPReport = new PReport({
            term_month_year: course.term_month_year,
            course_num: course.course_num, 
            TA_name: ta.ta_name,
            comment: comment,         
        });

        newPReport.save(function(err){
            if(err){
                console.log(err);
            }else{
                console.log("success")
            }
        })

        // add it to your ta
        let performance_log = ta.performance_log;
        performance_log.push(comment);
        await Ta.findOneAndUpdate({student_id: ta.student_id}, {performance_log : performance_log});
        res.status(200).send("Success");
    

    }catch (error) {
        res.status(500).send(error);
    }

});


module.exports = router;

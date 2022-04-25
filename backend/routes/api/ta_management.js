const csvtojson = require("csvtojson");
const express = require("express");
const router = require('express').Router();
const mongoose = require('mongoose');
const Ta = require("./../../models/Ta")
const Course = require("./../../models/Course")
const PReport = require("./../../models/PReport")


// error function
function error(message){
    return "Error : " + message;
} 


router.post('/carol', async function (req, res) {
    const newCourse = new Course({
        course_num: 307, 
        term_month_year: "Winter_Jan_2022",
        course_name: "Web Development",
        course_type: "COMP",
        TA_quota: 3,
        instructor_name: "Joseph Vybihal",
        enrollment_num: 200,
        wishlist:[],
        tas: [],
        ta_names: []
    });
    newCourse.save()

    const newCourse1 = new Course({
        course_num: 360, 
        term_month_year: "Winter_Jan_2022",
        course_name: "Algorithm Design",
        course_type: "COMP",
        TA_quota: 3,
        instructor_name: "Robert Robere",
        enrollment_num: 160,
        wishlist:[],
        tas: [],
        ta_names: []
    });
    newCourse1.save()

    const newTa = new Ta({
        id: -1,
        ta_name: "Mindy Kaling",
        legal_name: "Mindy Kaling",
        grad_ugrad: "grad",
        student_id: 30930393,
        term_month_year: "Winter_Jan_2022", 
        supervisor_name: "Robert Robere",
        email: "mindy.kaling@mail.mcgill.ca",
        priority: "yes", // could be a boolean
        hours: 80,
        date_applied: "Jan 20, 2022",
        location: "Montreal",
        phone: 5142313605,
        degree: "Mathematics & Computer Science",
        courses_applied_for: [],
        open_to_other_courses: "yes", //could be a boolean
        assigned_responsibility: [],
        assigned_in_past: [],
        student_ratings: [],
        student_rating_average : 0,
        student_comments: [],
        performance_log: [],
        ratings_received: 0,
        notes: [],
        wishlist:[]
    });
    
    newTa.save();
    res.status(200).send("Success");

});

// select course
router.get('/course', async function (req, res) {
    try {
        const course = await Course.find({ course_num: req.body.course_num}, {course_type : req.body.course_type});
        req.course_num = req.body.course_num;
        req.course_type = req.body.course_type;
        res.send(course);
        res.status(200);

    }catch (error) {
        res.status(500).send(error);
    }
});

function middleHandler(req, res, next) {
    req.course_num = req.body.course_num;
    req.course_type = req.body.course_type;
    console.log("execute middle ware");
    next();
}
/* I believe you've removed this
app.use(function (req, res, next) {
    console.log("first middle ware");                                                                                                             
    next();
});

// TA wish-list feature
router.post('/course/wishlist', middleware(), async function (req, res) {
    try{
        console.log(req.course_num);
        console.log(req.course_type);
        const course = await Course.find({course_type : req.course_type}, {course_num : req.course_num});
        if(!course){
            res.status(500).send(error);
        }else{
            const ta = await Ta.find({student_id : req.body.student_id});
            let list = course.wishlist;
            let updated_wishlist = ta.wishlist;
            if(list.includes(ta.student_id)){
                res.status(500).send("Ta is already included in wishlist");
            }else{
                // Updating Prof's Course Wishlist
                list.push(ta.student_id);
                await Course.updateOne({ course_num: req.body.course_num}, {course_type : req.body.course_type}, {wishlist : list});
                
                // Updating the Ta's Wishlist 
                let new_addition  = [];
                new_addition.push(course.course_type + " " + course.course_num);
                new_addition.push(course.instructor_name);
                updated_wishlist.push(new_addition)
                await Ta.updateOne({student_id : ta.student_id},{wishlist : updated_wishlist});
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
        if(course == null){
            res.status(500).send(error);
        }else{
            // find the appropriate TA
            const ta = await Ta.find({ta_name: req.body.ta_name});
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
            await Ta.updateOne({student_id: ta.student_id}, {performance_log : performance_log});
            res.status(200).send("Success");
        }

    }catch (error) {
        res.status(500).send(error);
    }

});

*/

module.exports = router;

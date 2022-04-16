//import {User, Ta, Course} from `../../models/models.js`;
const csvtojson = require("csvtojson");
const express = require("express");
const bodyParser = require("body-parser");
const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Ta = mongoose.model('Ta');
const Course = mongoose.model('Course');

// error function
function error(message){
    return "Error : " + message;
} 
// importing a bunch of Tas and courses
router.post("/import_tas", async function (req, res) {
    const ta_cohort_csv = await req.body.ta_file;
    await csvtojson().fromFile(ta_cohort_csv).then((json) => {
        var i;
        for (i = 0; i < json.length; i++) {
            console.log(json[i].fname)     //console.log prints all the entries
            //check if ta has made an account
            let user = User.find({ student_id: json[i].student_id})
            let ta = Ta.find({ student_id: json[i].student_id})
            let id = -1; // id will be -1 if they don't have an account 
            
            // if the ta has made an account, use the corresponding id number + update access codes 
            if(!user){
                id = user.id;
                let access = user.access;
                access.push(3);
                User.updateOne({student_id : student_id}, { access : access});    
            }
            // Do I want to check if there is a TA with the same ID in the database?
            if(!ta){
                const newTa = new Ta({
                    id : id,
                    ta_name : json[i].ta_name,
                    legal_name : json[i].legal_name,
                    grad_ugrad : json[i].grad_ugrad,
                    student_id : json[i].student_id,
                    term_month_year : json[i].term_month_year,
                    supervisor_name : json[i].supervisor_name,
                    priority : json[i].priority,
                    hours : json[i].hours,
                    date_applied : json[i].date_applied,
                    location : json[i].location,
                    phone : json[i].phone,
                    degree : json[i].degree,
                    email : json[i].email,
                    notes : json[i].notes,
                    open_to_other_courses : json[i].open_to_other_courses,
                    courses_applied_for : json[i].courses_applied_for,
                    assigned_responsibility :  [],
                    assigned_in_past : [],
                    student_ratings : [],
                    student_rating_average : 0.0,
                    student_comments : [],
                    performance_log : [],
                    ratings_received : [],
                    notes: [],
                    wishlist:[],
                });
                newTa.save(function(err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("success")
                    }
                })
            }else{
                // ***IMPORTANT*** DO WE NEED TO TRANSFER THE OLD CLASSES IF THE TA IS FROM A NEW TERM?
                Ta.findOneAndUpdate({ student_id: json[i].student_id}, 
                    {term_month_year : json[i].term_month_year},
                    {ta_name : json[i].ta_name},
                    {legal_name : json[i].legal_name},
                    {grad_ugrad : json[i].grad_ugrad},
                    {student_id : json[i].student_id},
                    {term_month_year : json[i].term_month_year},
                    {supervisor_name : json[i].supervisor_name},
                    {priority : json[i].priority},
                    {hours : json[i].hours},
                    {date_applied : json[i].date_applied},
                    {location : json[i].location},
                    {phone : json[i].phone},
                    {notes : json[i].notes},
                    {email : json[i].email},
                    {degree : json[i].degree},
                    {open_to_other_courses : json[i].open_to_other_courses},
                    {courses_applied_for : json[i].courses_applied_for}
                    )  
            }       
        }
    });

    const course_quota_csv = await req.body.course_file;
    await csvtojson().fromFile(course_quota_csv).then((json) => {
        var i;
        for (i = 0; i < json.length; i++) {
            console.log(json[i].fname)     //console.log prints all the entries
            
            const newCourse = new Course({
                course_num: json[i].course_num, 
                term_month_year: json[i].term_month_year,
                course_name: json[i].course_name,
                course_type: json[i].course_type,
                TA_quota: json[i].TA_quota,
                instructor_name: json[i].instructor_name,
                enrollment_num: json[i].enrollment_num,
                tas: [],
            });
            newCourse.save(function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log("success")
                }
            })
        }
    });
  });


// Viewing a specific Ta 
// ** IMPORTANT ** do you want to do this by words 
router.get('/view_ta', async function (req, res) {
    try {
        const ta = Ta.find({ student_id: req.body.student_id});
        if(!ta){
            res.json(ta);
        }else{
            error("No Ta found.")
        }
       } catch (err) {
        res.json({ error: err.message || err.toString() });
       }
});

// TO DO : view COURSE TA INFORMATION :)
/*
router.get('/view_all_tas', function (req, res) {
    var tas = [];
    Ta.findOne(student_id = student_id)

var Track = mongoose.model('Track', trackSchema);
  Ta.find({}, function (err, records) {
    records.forEach(function (post, i) {
      track.push({
        id: i,
        title: post.title,
        text: post.text.substr(0, 50) + '...'
      });
    });
    res.json({
      track: track
    });
  });
};

    return Ta.findOne({'_id' : id})
        .select('ta_name assigned_responsibility assigned_in_past')
        .exec(function(err, tas) {
            if (err){
                res.send(500);
                return;
            }
            return res.json({
                tas : tas,
            });
        
    });
    */

    /*
    const tas_assigned_responsibility = Ta.assigned_responsibility;
    const tas_assigned_past = Ta.assigned_in_past;
    const tas_names = Ta.ta_name;


    res.send({title: generatedEvent.title, description: generatedEvent.description});
    */

});

// Adding a Ta 
router.post('/add_ta', function (req, res) {
    // search for a course ! 
    let course = Course.find({ course_name: req.body.course_name}, {term_month_year : req.body.term_month_year});

    // search for a ta
    let ta = Ta.find({ student_id: req.body.student_id}, {ta_name : req.body.ta_name});
    
    if(!course && !ta){
        return error("Unable to find course and TA.")
    }else if(!course){
        return error("Unable to find course.")
    }else if(!ta){
        return error("Unable to find Ta")
    }

    // Handling the TA Database first 
    const in_past = ta.assigned_in_past;
    const in_present = ta.assigned_responsibility;

    // Removing course name from past courses if ta is now ta-ing it now
    if(in_past.includes(course.course_name)){
        const new_course_list = [];
        for (var i = 0; i < in_past.length; i++) { 
            if (in_past[i].localeCompare(course.course_name)){ 
                new_course_list.push(in_past[i]);
            }
        }
        in_past = new_course_list;
    }

    // If not in present classes, including it
    if(!in_present.includes(course.course_name)){
        in_present.push(course.course_name);
    }

    // Updating the Ta database
    Ta.findOneAndUpdate({ student_id: req.body.student_id}, {ta_name : req.body.ta_name}, { assigned_in_past : in_past}, {in_present : in_present}, {term_month_year : course.term_month_year});

    // Handling the Course database 
    const tas = course.tas;
    const taIsThere = 0;
    for (var i = 0; i < tas.length; i++) { 
        if (tas[i].legal_name == ta.legal_name && tas[i].student_id == ta.student_id){ 
            taIsThere = 1;
        }
    }
    
    if(taIsThere != 1){
        tas.push(ta);
        Course.findOneAndUpdate({ course_name: req.body.course_name}, {term_month_year : req.body.term_month_year},{tas: tas})
    }
})

// Deleting a Ta in Course based on the Student ID and Name
router.delete('/remove_ta', function (req, res){

    // search for a course ! 
    let course = Course.find({ course_name: req.body.course_name}, {term_month_year : req.body.term_month_year});

    // search for a ta
    let ta = Ta.find({ student_id: req.body.student_id}, {ta_name : req.body.ta_name}, {term_month_year : course.term_month_year});

    if(!course && !ta){
        return error("Unable to find course and TA.")
    }else if(!course){
        return error("Unable to find course.")
    }else if(!ta){
        return error("Unable to find Ta")
    }

   
    // Handling the TA Database first 
    const in_past = ta.assigned_in_past;
    const in_present = ta.assigned_responsibility;
    
    // Removing course name from present courses for ta
    if(in_present.includes(course.course_name)){
        const new_course_list = [];
        for (var i = 0; i < in_present.length; i++) { 
            if (!in_present[i].localeCompare(course.course_name)){ 
                new_course_list.push(in_present[i]);
            }
        }
        in_present = new_course_list;
        in_past.push(course.course_name)  
        
        // Updating the Ta database
        Ta.findOneAndUpdate({ student_id: req.body.student_id}, {ta_name : req.body.ta_name}, { assigned_in_past : in_past}, {in_present : in_present}, {term_month_year : course.term_month_year});
    }else{
        return error("TA is not teaching said course. No need to remove.")
    }

    // Handling the Course database 
    const tas = course.tas;
    const taIsThere = 0;
    const new_ta_list = [];
    for (var i = 0; i < tas.length; i++) { 
        if (tas[i].legal_name == ta.legal_name && tas[i].student_id == ta.student_id){ 
            taIsThere = 1;
        }else{
            new_ta_list.push(tas[i]);
        }
    }

    if(taIsThere == 1){
        Course.findOneAndUpdate({ course_name: req.body.course_name}, {term_month_year : req.body.term_month_year},{tas: new_ta_list})
    }
});

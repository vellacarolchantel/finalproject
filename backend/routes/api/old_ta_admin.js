//import {User, Ta, Course} from `../../models/models.js`;
let router = require('express').Router();
let mongoose = require('mongoose');
let User = mongoose.model('User');
let Ta = mongoose.model('Ta');
let Course = mongoose.model('Course');

// error function
function error(message){
    return "Error : " + message;
} 
// TO DO : importing a bunch of Tas and courses

// TO DO : view Ta's information :) - get a ta and show all the facts :)

// TO DO : view COURSE TA INFORMATION :)


// Adding a Ta 
router.post('/add_ta', function (req, res) {
    let ta_name = req.body.ta_name;
    let legal_name = req.body.legal_name;
    let grad_ugrad = req.body.grad_ugrad;
    let student_id = req.body.student_id;
    let term_month_year = req.body.term_month_year;
    let supervisor_name = req.body.supervisor_name;
    let priority = req.body.priority;
    let hours = req.body.hours;
    let date_applied = req.body.date_applied;
    let location = req.body.location;
    let phone = req.body.phone;
    let degree = req.body.degree;
    let email = req.body.degree;
    let notes = req.body.notes;
    let open_to_other_courses = req.body.open_to_other_courses;
    let courses_applied_for = req.body.courses_applied_for;

    if (!ta_name 
        && !legal_name 
        && !grad_ugrad 
        && !student_id 
        && !term_month_year 
        && !supervisor_name
        && !priority
        && !hours
        && !date_applied
        && !location
        && !phone
        && !degree
        && !email
        && !notes
        && !open_to_other_courses
        && !courses_applied_for){
        error("Need to fill out all fields.");
    }else if(!ta_name || !legal_name || !grad_ugrad || !student_id || !term_month_year || !supervisor_name || !priority
    || !hours || !date_applied || !location || !phone || !degree || !email || !notes || !open_to_other_courses || !courses_applied_for){
        error("Need to fill out specified fields.");
    }

    //check if ta has made an account
    let user = User.find({ student_id: student_id})
    let id = -1; // id will be -1 if they don't have an account 
    
    // if the ta has made an account, use the corresponding id number + update access codes 
    if(!user){
        id = user.id;
        let access = user.access;
        access.push(3);
        User.updateOne({student_id : student_id}, { access : access});
            
    }

    let ta = new Ta({
        id : id,
        ta_name : ta_name,
        legal_name : legal_name,
        grad_ugrad : grad_ugrad,
        student_id : req.body.student_id,
        term_month_year : req.body.term_month_year,
        supervisor_name : req.body.supervisor_name,
        priority : req.body.priority,
        hours : req.body.hours,
        date_applied : req.body.date_applied,
        location : req.body.location,
        phone : req.body.phone,
        degree : req.body.degree,
        email : req.body.degree,
        notes : req.body.notes,
        open_to_other_courses : req.body.open_to_other_courses,
        courses_applied_for : req.body.courses_applied_for,
        assigned_responsibility :  [],
        assigned_in_past : [],
        student_ratings : [],
        student_rating_average : 0.0,
        student_comments : [],
        performance_log : [],
        ratings_received : [],
        notes: [],
    });

    ta.save(function (err, ta) {
        if (err) return console.error(err);
        console.log(ta.ta_name + " saved to Ta collection.");
    });
 
})

// Deleting a Ta based on the Student ID
router.delete('/delete_ta', function (req, res){
    let student_id = req.body.student_id;
    
    // Updating the Ta database and removing the Ta 
    Ta.findOneAndDelete({student_id: student_id }, function (err, docs) {
        if (err){
            return console.log(err)
        }
        else{
            return console.log("Deleted User : ", docs);
        }
    });

    // Updating Ta access if the User exists
    let user = User.find({ student_id: student_id})
    if(!user){
        let access = user.access;
        let new_access=[];
        for (var i = 0; i < access.length; i++) { 
            if (access[i] != 3){ new_access.push(access[i])
            }
        }
        User.updateOne({student_id : student_id}, { access : new_access});
    }

});

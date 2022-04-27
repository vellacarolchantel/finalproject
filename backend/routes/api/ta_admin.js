const csvtojson = require("csvtojson");
const router = require('express').Router();
const mongoose = require('mongoose');
const Ta = require("./../../models/Ta")
const Course = require("./../../models/Course")

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
            let id = 'none'; // id will be -1 if they don't have an account 
            
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
                    {term_month_year : json[i].term_month_year, 
                    ta_name : json[i].ta_name,
                    legal_name : json[i].legal_name, 
                    grad_ugrad : json[i].grad_ugrad, 
                    student_id : json[i].student_id, 
                    supervisor_name : json[i].supervisor_name, 
                    term_month_year : json[i].term_month_year, 
                    priority : json[i].priority,
                    date_applied : json[i].date_applied, 
                    hours : json[i].hours, 
                    phone : json[i].phone, 
                    location : json[i].location, 
                    notes : json[i].notes, 
                    email : json[i].email,
                    degree : json[i].degree, 
                    open_to_other_courses : json[i].open_to_other_courses, 
                    courses_applied_for : json[i].courses_applied_for})  
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
                wishlist: [],
                ta_names: []
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
    res.sendStatus(200)
    res.send("Success")
  });


// Viewing a specific Ta 
router.get('/view_tas', async function (req, res) {
    try {
        const tas = await Ta.findOne({student_id : req.body.student_id}).select("-student_ratings").then (res => {
        res.status(200).send(tas);   
        });
    }catch (error) {
        response.status(500).send(error);
    }
});

// COURSE TA INFORMATION :)
router.get('/view_tas_courses', async function (res) {
    try {
        const tas = await Ta.find({}).select(["student_id","ta_name","assigned_responsibility", "assigned_in_past"]).then (res => {
        res.sendStatus(200)
        res.send(tas);   
        });
    }catch (error) {
        response.status(500).send(error);
    }
    res.sendStatus(200)
    res.send("Success")
});

// select Course 
router.get('/view_tas_courses/course', async function (req, res) {
    try {
        const tas = await Course.findOne({course_num : req.body.course_num}, {course_type : req.body.course_type}).select(["tas"]).then (res => {
            var obj = {
                ta_names: [],
                ta_ids: tas,
             };
            
            for (var i = 0; i < tas.length; i++) {
                const ta_name = Ta.findOne({student_id : ta[i]}).select("ta_name");
                obj.ta_names.push(ta_name);
            }
           
        
        res.sendStatus(200).send(JSON.stringify(obj));  
        });
    }catch (error) {
        response.status(500).send(error);
    }
});

// select ta
router.get('/view_tas_courses/ta', async function (req, res) {
    try {
        const ta = await Ta.findOne({student_id : req.body.student_id}).select(["student_id","ta_name","assigned_responsibility"]).then (res => {
        res.sendStatus(200).send(ta); 
        });
    }catch (error) {
        response.status(500).send(error);
    }
});


// Adding a Ta 
router.post('/add_ta', function (req, res) {
    // search for a course ! 
    let course = Course.findOne({ course_num: req.body.course_num, course_type : req.body.course_type});

    // search for a ta
    let ta = Ta.findOne({ student_id: req.body.student_id});
    
    if(!course && !ta){
        res.status(500).send("Unable to find course and TA.")
    }else if(!course){
        res.status(500).send("Unable to find course.")
    }else if(!ta){
        res.status(500).send("Unable to find Ta")
    }

    // Handling the TA Database first 
    const in_past = ta.assigned_in_past;
    const in_present = ta.assigned_responsibility;

    // Removing course name from past courses if ta is now ta-ing it now
    var name = course.course_type + " " + course.course_num;
    if(in_past.includes(name)){
        const new_course_list = [];
        for (var i = 0; i < in_past.length; i++) { 
            if(!in_past[i].localeCompare(name)){ 
                new_course_list.push(in_past[i]);
            }
        }
        in_past = new_course_list;
    }

    // If not in present classes, including it
    if(!in_present.includes(name)){
        in_present.push(name);
    }

    // Updating the Ta database
    Ta.findOneAndUpdate({ student_id: req.body.student_id, ta_name : req.body.ta_name , term_month_year : course.term_month_year}, { assigned_in_past : in_past, in_present : in_present});

    // Handling the Course database 
    const tas = course.tas;
    const taIsThere = 0;
    for (var i = 0; i < tas.length; i++) { 
        if (tas[i] == ta.student_id){ 
            taIsThere = 1;
        }
    }
    
    if(taIsThere != 1){
        tas.push(ta.student_id);
        ta_names.push(ta.ta_name);
        Course.findOneAndUpdate({ course_type: req.body.course_type, course_num: req.body.course_num},{tas: tas, ta_names: ta_names});
    }
    res.sendStatus(200).send("Success")
})

// Deleting a Ta in Course based on the Student ID and Name
router.delete('/remove_ta', function (req, res){

    // search for a course ! 
    let course = Course.findOne({ course_num: req.body.course_num, course_num : req.body.course_num});

    // search for a ta
    let ta = Ta.findOne({ student_id: req.body.student_id, term_month_year : course.term_month_year});

    if(!course && !ta){
        res.status(500).send("Unable to find course and TA.")
    }else if(!course){
        res.status(500).send("Unable to find course.")
    }else if(!ta){
        res.status(500).send("Unable to find Ta")
    }

   
    // Handling the TA Database first 
    const in_past = ta.assigned_in_past;
    const in_present = ta.assigned_responsibility;
    
    var name = course.course_type + " " + course.course_num;
    // Removing course name from present courses for ta
    if(in_present.includes(name)){
        const new_course_list = [];
        for (var i = 0; i < in_present.length; i++) { 
            if (!in_present[i].localeCompare(name)){ 
                new_course_list.push(in_present[i]);
            }
        }
        in_present = new_course_list;
        in_past.push(name)  
        
        // Updating the Ta database
        Ta.findOneAndUpdate({ student_id: req.body.student_id, ta_name : req.body.ta_name , term_month_year : course.term_month_year}, {in_present : in_present, assigned_in_past : in_past });
    }else{
        res.status(500).send("TA is not teaching said course. No need to remove.")
    }

    // Handling the Course database 
    const tas = course.tas;
    const ta_names = course.ta_names;
    const taIsThere = 0;
    const new_ta_list = [];
    const new_ta_names_list = [];
    for (var i = 0; i < tas.length; i++) { 
        if (tas[i]== ta.student_id){ 
            taIsThere = 1;
        }else{
            new_ta_list.push(tas[i]);
            new_ta_names_list.push(ta_names[i]);
        }
    }

    if(taIsThere == 1){
        Course.findOneAndUpdate({ course_num: req.body.course_num, course_type: req.body.course_type }, {tas: new_ta_list, ta_names : new_ta_names_list});
    }
    res.sendStatus(200).send("Success");
});

module.exports = router;
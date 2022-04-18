mongoose = require('mongoose');
const Ta = require("./Ta")


// COURSE 
const courseSchema = new mongoose.Schema({
    course_num: Number, 
    term_month_year: String,
    course_name: String,
    course_type: String,
    TA_quota: Number,
    instructor_name: String,
    enrollment_num: Number,
    tas: [Number],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
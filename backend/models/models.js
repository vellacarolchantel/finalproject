mongoose = require('mongoose');

// COURSE 
const courseSchema = new mongoose.Schema({
    course_num: Number, 
    term_month_year: Number,
    course_name: String,
    course_type: String,
    semesters: [Semester],
    TA_quota: Number,
    instructor_name: [String],
    enrollment_num: Number,
    tas: [Ta],
});

const Course = mongoose.model('Course', courseSchema);

// USER 
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    id: Number,
    student_id: Number, 
    username: String, 
    password: String, 
    courses_reg: [Course],
    access: [Number]
});

const User = mongoose.model('User', userSchema);

// TA 

const taSchema = new mongoose.Schema({
    id: Number,
    ta_name: String,
    legal_name: String,
    grad_ugrad: String,
    student_id: Number,
    term_month_year: Number, 
    supervisor_name: String,
    priority: String, // could be a boolean
    hours: Number,
    date_applied: Number,
    location: String,
    phone: Number,
    degree: String,
    courses_applied_for: [String],
    open_to_other_courses: String, //could be a boolean
    assigned_responsibility: [Course],
    student_rating_average : Number,
    student_comments: [String],
    performance_log: [String],
    ratings_received: Number
});

const Ta = mongoose.model('Ta', taSchema);

const studentSchema = new mongoose.Schema({
    id: Number,
    ratings_given: Number,
    // For Chantel to fill out :)
});

const Student = mongoose.model('Student', studentSchema);

// PROFESSOR 
const profSchema = new mongoose.Schema({
    ratings_given: Number,
    curr_courses : [Course],
    name: String,
    id: Number,
    // For Chantel to fill out :)
});

const Professor = mongoose.model('Professor', profSchema);

// TA ADMIN 

// SYS_OP

// PERFORMANCE REPORTS

const preportSchema = new mongoose.Schema({
    term_month_year: Number,
    TA_name: String,
    comment: String,
    course_num
});

const PReport = mongoose.model('PReport', preportSchema);
mongoose = require('mongoose');

// SEMESTER
const semesterSchema = new mongoose.Schema({
    term_month_year: Number,
    instructor_assigned_name: String, 
});

const Semester = mongoose.model('Semester', semesterSchema);

// COURSE 
const courseSchema = new mongoose.Schema({
    past_semesters: [Semester],
    course_num: Number, 
    term_month_year: Number,
    course_name: String,
    course_type: String,
    TA_quota: Number,
    instructor_name: String,
    course_enrollment_num: Number,
    curr_tas: [Ta],
    curr_prof: [User],
    curr_sem: Semester,
});

const Course = mongoose.model('Course', courseSchema);

// USER 
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    id: Number, 
    username: String, 
    password: String, 
    courses_reg: [Course],
    access: [Number]
});

const User = mongoose.model('User', userSchema);

// TA 

const taSchema = new mongoose.Schema({
    user_info: User,
    TA_name: String,
    grad_ugrad: String,
    student_id: Number,
    notes: [String],
    term_month_year: Number, 
    supervisor_name: String,
    priority: String, // could be a boolean
    hours: Number,
    date_applied: Number,
    location: String,
    phone: Number,
    degree: String,
    courses_applied_for: [Course],
    open_to_other_courses: String, //could be a boolean
    assigned_responsibility: [Course],
    rating_average : Number,

});

const Ta = mongoose.model('Ta', taSchema);

const studentSchema = new mongoose.Schema({
    user: User,
});

const Student = mongoose.model('Student', studentSchema);

// PROFESSOR 

// TA ADMIN 

// SYS_OP


// PERFORMANCE REPORTS

const preportSchema = new mongoose.Schema({
    term_month_year: Number,
    course_num: Number, 
    // Maybe use Course here instead
    TA_name: String,
    comment: String,
});

const PReport = mongoose.model('PReport', preportSchema);
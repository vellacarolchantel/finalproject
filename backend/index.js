require("dotenv").config(); 
const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server is running"));


const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

/*
const semesterSchema = new mongoose.Schema({
    term_month_year: Number,
    instructor_assigned_name: String, 
});

const Semester = mongoose.model('Semester', semesterSchema);

const courseSchema = new mongoose.Schema({
    semesters: [Semester],
    course_num: Number, 
    course_name: String,
});

const Course = mongoose.model('Course', courseSchema);

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    student_id: Number,
    id: Number, 
    username: String, 
    password: String, 
    courses_reg: [Course],
    access: [Number]
});

const User = mongoose.model('User', userSchema);

const preportSchema = new mongoose.Schema({
    term_month_year: Number,
    course_num: Number, 
    // Maybe use Course here instead
    TA_name: String,
    comment: String,
});

const PReport = mongoose.model('PReport', preportSchema);

const taSchema = new mongoose.Schema({
    user_info: User,
    course_num: Number, 
    TA_name: String,
    comment: String,
});

const Ta = mongoose.model('Ta', taSchema);

*/

const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String, 
    year: Number,
    subjects: [String],
});

const Student = mongoose.model('Student', studentSchema);

const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud.save().then(() => console.log("One entry added"));

const stud1 = new Student({
    roll_no: 1020,
    name: 'Carol Chantel',
    year: 4,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud1.save().then(() => console.log("One entry added"));
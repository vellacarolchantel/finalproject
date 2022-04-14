mongoose = require('mongoose');
const semesterSchema = new mongoose.Schema({
    term_month_year: Number,
    instructor_assigned_name: String, 
});

const Semester = mongoose.model('Semester', semesterSchema);

const courseSchema = new mongoose.Schema({
    past_semesters: [Semester],
    course_num: Number, 
    course_name: String,
    curr_tas: [Ta],
    curr_prof: [User],
    curr_sem: Semester,
});

const Course = mongoose.model('Course', courseSchema);


const student = new User({
    first_name: 'Carol',
    last_name: 'Altimas', 
    email: 'carol.altimas@mail.mcgill.ca',
    student_id: 09283920,
    id: 023,
    username: 'carolaltimas', 
    password: 'bob', 
    courses_reg: [],
    access: [4]
});

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



const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String, 
    year: Number,
    subjects: [String],
});

const Student = mongoose.model('Student', studentSchema);

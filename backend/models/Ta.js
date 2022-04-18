mongoose = require('mongoose');

const taSchema = new mongoose.Schema({
    id: Number,
    ta_name: String,
    legal_name: String,
    grad_ugrad: String,
    student_id: Number,
    term_month_year: String, 
    supervisor_name: String,
    email: String,
    priority: String, // could be a boolean
    hours: Number,
    date_applied: Number,
    location: String,
    phone: Number,
    degree: String,
    courses_applied_for: [String],
    open_to_other_courses: String, //could be a boolean
    assigned_responsibility: [String],
    assigned_in_past: [String],
    student_ratings: [Number],
    student_rating_average : Number,
    student_comments: [String],
    performance_log: [String],
    ratings_received: Number,
    notes: [String],
    wishlist:[[String,String]]
});

const Ta = mongoose.model('Ta', taSchema);

module.exports = Ta;
mongoose = require('mongoose');
// PERFORMANCE REPORTS

const preportSchema = new mongoose.Schema({
    term_month_year: String,
    course_num: Number, 
    TA_name: String,
    comment: String,
});

const PReport = mongoose.model('PReport', preportSchema);
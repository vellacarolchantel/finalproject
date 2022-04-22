mongoose = require('mongoose');

// PROFESSOR 
const profSchema = new mongoose.Schema({
    ratings_given: Number,
    curr_courses : [String],
    name: String,
    id: Number,
    // For Chantel to fill out :)
});

const Professor = mongoose.model('Professor', profSchema);

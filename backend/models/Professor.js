mongoose = require('mongoose');

// PROFESSOR 
const profSchema = new mongoose.Schema({
    ratings_given: Number,
    curr_courses : [String],
    name: String,
    id: Number,

});

const Professor = mongoose.model('Professor', profSchema);

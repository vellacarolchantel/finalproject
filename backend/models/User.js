mongoose = require('mongoose');

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

module.exports = User;
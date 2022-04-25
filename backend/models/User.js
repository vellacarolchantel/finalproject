mongoose = require('mongoose');
bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 7;
const Course = require("./Course.js");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, 
    email: String,
    id: Number,
    student_id: Number, 
    username: String, 
    password: String, 
    courses_reg: [String],
    access: [Number]
});


userSchema.pre('save', function (next) {
    var user = this;

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.username, salt, function (err, hash) {
            if (err) return next(err);

            // override using hashed user
            if (user.id == user.username) {
            user.id = hash;
        }
        });
    });

    // only hash the password at registration or when modified
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override using hashed password
            user.password = hash;
            next();
        });
    });
});

// compares the hashed submitted password with the hashed database password
userSchema.methods.comparePassword = function (submittedPassword, cb) {
    bcrypt.compare(submittedPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

const User = mongoose.model('User', userSchema);

module.exports = User;

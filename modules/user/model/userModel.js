var mongoose = require('mongoose');
var regex = require('regex-email');
var Schema = mongoose.Schema;

var validGenders = ["male", "female"];

var customEmailValidator = [function (val) {
    return regex.test(val);
}, 'Invalid email address'];

var userSchema = new Schema({
    UserId: {
        type: Number,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate: customEmailValidator
    },
    Gender: {
        type: String,
        required: true,
        enum: validGenders
    }
}, {
    collection: 'Users'
});

module.exports = mongoose.model('Users', userSchema);
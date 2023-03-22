const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userType: String,
    otp: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('user', userShema)
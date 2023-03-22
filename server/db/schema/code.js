const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
    userId: String,
    html: String,
    css: String,
    js: String,
    img:{
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('code', userShema)
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userType:{
        type: String,
        required: true,
        enum : ['admin', 'user'],
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('User', userSchema);




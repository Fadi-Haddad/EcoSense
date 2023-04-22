const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userType:{
        type: String,
        required: true,
        enum : ['admin', 'user'],
    },
})
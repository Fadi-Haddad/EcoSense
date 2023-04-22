const mongoose = require('mongoose');
const sensorReadingsSchema = new mongoose.Schema({
    sensorName:{
        type: String,
        required: true,
    },
    reading:{
        type: Number,
        required: true,
    }
});
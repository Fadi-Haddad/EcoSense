const mongoose = require('mongoose');
const sensorReadingsSchema = new mongoose.Schema({
    sensorName:{
        type: String,
        required: true,
    },
});
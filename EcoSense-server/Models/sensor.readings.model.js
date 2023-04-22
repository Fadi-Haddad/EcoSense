const mongoose = require('mongoose');
const sensorReadingsSchema = new mongoose.Schema({
    sensorName:{
        type: String,
        required: true,
    },
    reading:{
        type: Number,
        required: true,
    },
    timeStamp:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SensorReadings', sensorReadingsSchema);
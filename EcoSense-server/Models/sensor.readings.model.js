const mongoose = require('mongoose');
const sensorReadingsSchema = new mongoose.Schema({
    AQI: {
        type: Number,
        required: true
    },
    CO: {
        type: Number,
        required: true
    },
    CO2: {
        type: Number,
        required: true
    },
    Temp: {
        type: Number,
        required: true
    },
    Humidity: {
        type: Number,
        required: true
    },
    timeStamp:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('SensorReadings', sensorReadingsSchema);
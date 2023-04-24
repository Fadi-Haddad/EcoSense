const mongoose = require('mongoose');
const sensorThresholdsSchema = new mongoose.Schema({
    sensor:{
        type:String,
        required:true,},
    maxValue:{
        type: Number,
        required: true,},
    minValue:{
        type: Number,
        required: true,},
    notifications:{
        type: String,
        enum: ['on', 'off'],
        default: 'on',}
});
module.exports = mongoose.model('SensorThresholds',sensorThresholdsSchema);
const mongoose = require('mongoose');
const sensorThresholdsSchema = new mongoose.Schema({
sensor:{
    name:String,
    required:true,},
maxValue:{
    type: Number,
    required: true,},
})
const mongoose = require("mongoose");

const devicesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: True,
    },
    state:{
        type:String,
        enum:['on','off'],
        default:'on',
    },
    operation_mode:{
        type:String,
        enum:['auto','manual'],
        default:'auto',
    }
});
module.exports = mongoose.model('Devices','devicesSchema');
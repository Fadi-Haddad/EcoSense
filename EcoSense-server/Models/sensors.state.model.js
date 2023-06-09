const mongoose = require ("mongoose");

const sensorsStateSchema = new mongoose.Schema ({
    state:{
        type: String,
        required: true,
        enum : ['on', 'off'],
        default: 'on',
    },
});

module.exports = mongoose.model('sensorsState',sensorsStateSchema);
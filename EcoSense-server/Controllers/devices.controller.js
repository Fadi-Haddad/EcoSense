const Devices = require("../Models/devices.model");

const setDeviceState = async(req,res)=>{
    const state = req.params.state;
    const device = req.params.device;
    const updateState= await Devices.findOneAndReplace({name:device_name},{state:device_state}, {new:true});
}
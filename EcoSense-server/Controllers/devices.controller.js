const Devices = require("../Models/devices.model");

const setDeviceState = async(req,res)=>{
    try{
    const state = req.params.state;
    const device = req.params.device;
    const updateState= await Devices.findOneAndReplace({name:device_name},{state:device_state}, {new:true});  
    } catch(err){
        console.log(err);
        res.status(400).json({ message: 'Error update devices state' });
    }

}
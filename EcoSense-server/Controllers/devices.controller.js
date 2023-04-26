const Devices = require("../Models/devices.model");
const validDeviceNames = ['fan','heater'];

const setDeviceState = async(req,res)=>{
    try{
    const device_state = req.params.state;
    const device_name = req.params.device;
    if(validDeviceNames.includes(device_name)){
        const updateState= await Devices.findOneAndReplace({name:device_name},{state:device_state}, {new:true});
        res.send(updateState);}
    } catch(err){
        console.log(err);
        res.status(400).json({ message: 'Error update devices state' });
    }

}
const SensorReadings = require("../Models/sensorReadings.model");
const Devices = require("../Models/devices.model");
const validDeviceNames = ['fan','heater'];
const validDeviceStates = ['on', 'off'];
const validOperationModes = ['auto', 'manual'];

// const setDeviceState = async(req,res)=>{
//     try{
//     const device_state = req.params.state;
//     const device_name = req.params.device;
//     if(validDeviceNames.includes(device_name) && validDeviceStates.includes(device_state)){
//         const updateState= await Devices.findOneAndReplace({name:device_name},{state:device_state}, {new:true});
//         if(!updateState){
//             return res.staus(400).send("Invalid device name or state")}
//         res.send(updateState);}
//         return res.staus(200).send("Device state changed sucessfully")
//     } catch(err){
//         console.log(err);
//         res.status(400).json({ message: 'Error update devices state' });
//     }
// }
const setFanState = async (req, res) => {
    const fanState = req.params.fan_state;
    const fanOperationMode = req.body.fan_operation_mode;
    const fan = await Devices.findOne({ name: 'fan' });
    if (!fan) {
        return res.status(400).json({ message: 'Device not found.' });}
    if (operationMode === 'manual') {
        const updateState = await Devices.findOneAndUpdate({ name: 'fan' }, { state: fanState }, { new: true });
        if (!updateState) {
            return res.status(400).json({ message: 'Failed to update device state.' })}
        return res.status(200).json({ message: 'Device state updated successfully.' });
    }
}

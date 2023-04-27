const SensorReadings = require("../Models/sensor.readings.model");
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
    try{
    const fanState = req.params.fan_state;
    const fanOperationMode = req.params.fan_operation_mode;
    console.log(fanState,fanOperationMode)
    const fan = await Devices.findOne({ name: 'fan' });
    if (!fan) {
        return res.status(400).json({ message: 'fan not found.' });}
    if (fanOperationMode === 'manual') {
        const updateState = await Devices.findOneAndUpdate({ name: 'fan' }, { state: fanState }, { new: true });
        if (!updateState) {
            return res.status(400).json({ message: 'Failed to update fan state.' })}
        return res.status(200).json({ message: 'fan state updated successfully.' });
    }
    if (fanOperationMode === 'auto') {
        const readings = await SensorReadings.find().sort({ timeStamp: -1 }).limit(1);
        const {AQi, CO, CO2, Temperature, Humidity} = readings;

    if (AQi >100 || CO>5  || CO2>1000 || Temperature > 30 || Humidity > 50) {
        fanState = 'on';
        } else if (AQi <95 && CO <4  && CO2 < 950 && Temperature <28 && Humidity <45) {
        fanState = 'off';
        }
        // else {
        // fanState = fan.state;
        // }
        console.log(fanState)
    const updateState = await Devices.findOneAndUpdate({ name: 'fan' }, { state: fanState ,operation_mode:'auto'}, { new: true });
    if (!updateState) {
        return res.status(400).json({ message: 'Failed to update fan state.' });
        }
    return res.status(200).json({ message: 'Fan state updated successfully.' });
    }}
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating fan state.' });
      }
}
module.exports = {setFanState};
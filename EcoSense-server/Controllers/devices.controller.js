const sensorReading= require('../Models/sensor.readings.model');
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
    let fanState = req.params.fan_state;
    let fanOperationMode = req.params.fan_operation_mode;
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
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1);
        AQI = readings[0].AQI
        CO = readings[0].CO
        CO2 = readings[0].CO2
        Temperature = readings[0].Temp
        Humidity = readings[0].Humidity
        console.log(AQI,CO,CO2,Temperature,Humidity)
        if (AQI >100 || CO>5  || CO2>1000 || Temperature > 30 || Humidity > 50) {
            fanState = 'on';
            } else if (AQI <=95 && CO <=4  && CO2 <=950 && Temperature <=28 && Humidity <=45) {
            fanState = 'off';
            }
        // else {
        // fanState = fan.state;
        // }
    const updateState = await Devices.findOneAndUpdate({ name: 'fan' }, { state: fanState ,operation_mode:fanOperationMode}, { new: true });
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
const setHeaterState = async (req, res) => {
    let heaterState = req.params.heater_state;
    let heaterOperationMode = req.params.heater_operation_mode;
    const heater = await Devices.findOne({ name: 'heater' });
    if (!heater) {
        return res.status(400).json({ message: 'heater not found.' });}
    if (heaterOperationMode === 'manual') {
        const updateState = await Devices.findOneAndUpdate({ name: 'heater' }, { state: heaterState }, { new: true });
        if (!updateState) {
            return res.status(400).json({ message: 'Failed to update heater state.' })}
        return res.status(200).json({ message: 'Heater state updated successfully.' });
    }
    if (heaterOperationMode === 'auto') {
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1)
        Temperature = readings[0].Temp;
        if (Temperature <=20) {
            heaterState = 'on';}
        else if (Temperature >=22) {
        heaterState = 'off';}
        else{
            heaterState=heater.state;
        }
    const updateState = await Devices.findOneAndUpdate({ name: 'heater' }, { state: heaterState ,operation_mode:heaterOperationMode}, { new: true });
    if (!updateState) {
        return res.status(400).json({ message: 'Failed to update fan state.' });
        }
    return res.status(200).json({ message: 'Fan state updated successfully.' });
    }}
module.exports = {setFanState};
const sensorReading= require('../Models/sensor.readings.model');
const Devices = require("../Models/devices.model");
const Notifications = require ("../Models/notifications.model")
const validDeviceNames = ['fan','heater'];
const validDeviceStates = ['on', 'off'];
const validOperationModes = ['auto', 'manual'];

const getDeviceState = async ()=>{
    
}
const setDeviceState = async ()=>{
    try{
    const newFanState = await Notifications.find({fanOn:true});
    const newHeaterState = await Notifications.find({heaterOn:true});
    if (newFanState.length === 0){
        await Devices.findOneAndUpdate({ name: 'fan' }, { state: 'off' });}
    else {
        await Devices.findOneAndUpdate({ name: 'fan' }, { state: 'on' });}
    if (newHeaterState.length === 0){
        await Devices.findOneAndUpdate({ name: 'heater' }, { state: 'off' });}
    else {
        await Devices.findOneAndUpdate({ name: 'heater' }, { state: 'on' });}
    }
    catch(err){
        console.log("error setting devices state")}
}

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
        return res.status(400).json({ message: 'Failed to update heater state.' });
        }
    return res.status(200).json({ message: 'Heater state updated successfully.' });
    }}
module.exports = {setFanState,setHeaterState,setDeviceState};
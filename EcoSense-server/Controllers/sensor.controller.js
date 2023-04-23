const sensorReading= require('../Models/sensor.readings.model');

const saveSensorReadings = async (req, res) => {
    try{
        const {AQI,CO,CO2,Temp,Humidity} = req.body;
        console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
        const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity});
        await newReading.save();
    } catch(err){
        console.error(err);
    }
    };
const getSensorReadings = (req, res) => {
    
    };

module.exports = {saveSensorReadings};
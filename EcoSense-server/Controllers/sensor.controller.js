const sensorReading= require('../Models/sensor.readings.model');

const getSensorReadings = async (req, res) => {
    try{
        const {AQI,CO,CO2,Temp,Humidity} = req.body;
        const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity});
        await newReading.save();
    } catch{
        console.error(err);
    }
    };
    module.exports = {getSensorReadings};
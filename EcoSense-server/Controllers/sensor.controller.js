const sensorReading= require('../Models/sensor.readings.model');

const getSensorReadings = (req, res) => {
        const {AQI,CO,CO2,Temp,Humidity} = req.body;
    };
const sensorReading= require('../Models/sensor.readings.model');

const saveSensorReadings = async (req, res) => {
    try{
        const {AQI,CO,CO2,Temp,Humidity} = req.body;
        console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
        const now = new Date();
        now.setHours(now.getHours() + 3)
        const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity,timeStamp:now});
        await newReading.save();
    } catch(err){
        console.error(err);
    }
    };
const getSensorReadings = async (req, res) => {
    try{
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1);
        res.json(readings);
    } catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error retrieving sensor readings' });
    };
    };


module.exports = {saveSensorReadings,getSensorReadings};
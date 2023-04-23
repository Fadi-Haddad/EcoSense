const sensorReading= require('../Models/sensor.readings.model');
const sensorsState= require('../Models/sensors.state.model');
const validSensorNames = ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'];

const checkAndSetSensorState =async () => {
    const count =await sensorsState.countDocuments();
  };


const saveSensorReadings = async (req, res) => {
    try{
        const sensors_state = await sensorsState.findOne();
        if(sensors_state=="on"){
            const {AQI,CO,CO2,Temp,Humidity} = req.body;
            console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
            const now = new Date();
            now.setHours(now.getHours() + 3)
            const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity,timeStamp:now});
            await newReading.save();}
    } catch(err){
        console.error(err);
        res.status(400).json({ message: "Error posting sensors' readings" });
    }
    };
const getSensorReadings = async (req, res) => {
    try{
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1);
        res.json(readings);
    } catch(err){
        console.error(err);
        res.status(400).json({ message: 'Error retrieving sensor readings' });
    };
    };
const getSensorMinReading = async(req, res) => {
    try{
        sensorName= req.params.sensor_name;
        if(!validSensorNames.includes(sensorName)){
            return res.status(500).json({ message: `${sensorName} is not a valid sensor name` });}
        const result = await sensorReading.findOne().sort(sensorName).exec();
        res.json(result);
    } catch (err){
        console.error(err);
        res.status(400).json({ message: "Error retrieving sensor's minimum reading" });
    };
    };
const getSensorMaxReading = async (req, res) => {
    try{
        sensorName= req.params.sensor_name;
        if(!validSensorNames.includes(sensorName)){
            return res.status(500).json({ message: `${sensorName} is not a valid sensor name` });}
        const result = await sensorReading.findOne().sort({ [sensorName]: -1 }).exec();
        res.json(result);
    }catch(err){
        console.error(err);
        res.status(400).json({ message: "Error retrieving sensor's maximum reading" });
    };
    };
const getSensorsState = async (req, res) => {
    try{
        const sensors_state = await sensorsState.findOne();
        res.json(sensors_state);
    } catch(err){
        console.error(err);
        res.status(400).json({ message: 'Error retrieving sensors state' });
    }
    };

module.exports = {saveSensorReadings,getSensorReadings,getSensorMinReading,getSensorMaxReading,getSensorsState};
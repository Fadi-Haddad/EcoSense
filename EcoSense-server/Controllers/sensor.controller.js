const sensorReading= require('../Models/sensor.readings.model');
const sensorsState= require('../Models/sensors.state.model');
const validSensorNames = ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'];
const validSensorStates = ['on', 'off'];

const checkAndSetSensorState =async () => {
    try{
    const count =await sensorsState.countDocuments();
    if (count == 0){
        const newState = sensorsState({state:'on'});
        await newState.save();
        console.log("Sensors state set to on");
    }
    } catch(err) {
        console.error(err);
    }
  };

checkAndSetSensorState();

const saveSensorReadings = async (req, res) => {
    try{
        const sensors_state = await sensorsState.findOne();
        if(sensors_state.state=="on"){
            const {AQI,CO,CO2,Temp,Humidity} = req.body;
            console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
            const now = new Date();
            now.setHours(now.getHours() + 3)
            const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity,timeStamp:now});
            await newReading.save();
            res.status(200).json({ message: 'Sensor readings saved sucessfully ' });}
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
    const setSensorsState = async (req, res) => {
        const new_state= req.params.state;
        if (validSensorStates.includes(new_state)){
            const current_state = await sensorsState.findOne();
            if (new_state !== current_state.state){
                await sensorsState.findOneAndUpdate({}, { state: new_state }, { new: true });
                console.log("state changed to "+new_state);
                res.status(200).json({ message: 'state changed' });}
            }
        else{
            console.log(new_state+"is not a valid state for sensors");
            res.status(200).json({ message: 'state is not changed' });
        };
        };
    const setSensorMinReading = (req,res) =>{
        sensorName= req.params.sensor_name;
        const minReading = req.body.min;
        const sensor = sensorthresholds.findOne({ name: sensorName });
    }

module.exports = {saveSensorReadings,getSensorReadings,getSensorMinReading,getSensorMaxReading,getSensorsState,setSensorsState};
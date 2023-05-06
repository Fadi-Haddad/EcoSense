const sensorReading= require('../Models/sensor.readings.model');
const sensorThresholds= require('../Models/sensor.thresholds.model');
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
const populateSensorThresholds= async ()=>{
    try{
    const sensors = [
            {sensor: 'AQI',minValue: 0,maxValue: 100,},
            {sensor: 'CO',minValue: 0,maxValue: 5,},
            {sensor: 'CO2',minValue: 400,maxValue: 1000,},
            {sensor: 'Temp',minValue: 20,maxValue: 30,},
            {sensor: 'Humidity',minValue: 30,maxValue: 50,},
    ];
    const count = await sensorThresholds.countDocuments();
    if(count===0){
        await sensorThresholds.insertMany(sensors);
        console.log('Sensor thresholds table populated successfully!');
    }}
    catch(err){
        console.error(err);
    };
};
checkAndSetSensorState();
populateSensorThresholds();

const saveSensorReadings = async (req, res) => {
    try{
        const sensors_state = await sensorsState.findOne();
        if(sensors_state.state=="on"){
            const {AQI,CO,CO2,Temp,Humidity} = req.body;
            console.log(JSON.stringify({ AQI, CO, CO2, Temp, Humidity }));
            const now = new Date();
            now.setHours(now.getHours() + 0) // set time offset
            const newReading = new sensorReading({AQI,CO,CO2,Temp,Humidity,timeStamp:now});
            await newReading.save();
            res.status(200).json({ message: 'Sensor readings saved sucessfully ' });}
    } catch(err){
        console.error(err);
        res.status(400).json({ message: "Error posting sensors' readings" });
    }
    };
const getSensorsReadings = async (req, res) => {
    try{
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(1);
        const state = {};
        res.json(readings);
    } catch(err){
        console.error(err);
        res.status(400).json({ message: 'Error retrieving sensor readings' });
    };
    };
const getSensorReadings = async (req, res) => {
    try{
        const sensor_name= req.params.sensor_name;
        const readings = await sensorReading.find().sort({ timeStamp: -1 }).limit(10);
        const filteredDocs = readings.map(reading => reading[sensor_name]);
        res.json(filteredDocs);
    } catch(err){
        console.error(err);
        res.status(400).json({ message: 'Error retrieving sensor readings' });
    };
    };
const getSensorMinMaxReading = async (req, res) => {
    try{
        sensorName= req.params.sensor_name;
        if(!validSensorNames.includes(sensorName)){
            return res.status(500).json({ message: `${sensorName} is not a valid sensor name` });}
        const minResult = await sensorReading.findOne().sort(sensorName).exec();
        const maxResult = await sensorReading.findOne().sort({ [sensorName]: -1 }).exec();
        res.json({min:minResult,max:maxResult});
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
const setSensorsState = async (req, res) => { //sets sensors notification state (on/off) from frontend
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
const setSensorsThresholds = async (req,res) =>{
    try{
        const sensorName= req.params.sensor_name;
        const minValue = req.params.min;
        const maxValue = req.params.max;
        if (!isNaN(minValue) && !isNaN(maxValue)){
            const sensor = await sensorThresholds.findOne({ sensor: sensorName });
            if (!sensor) {
                return res.status(404).json({ error: 'Sensor not found' });}
            sensor.minValue = minValue;
            sensor.maxValue = maxValue;
            await sensor.save();
            res.status(200).json({ message: "Sensor's thresholds updated successfully" });
        }
    } catch(err){
        res.status(500).json({ error: "Error setting sensor's Thresholds" });
    }
}
const setSensorState = async (req,res)=>{
    const sensorName= req.params.sensor_name;
    const sensorState = req.params.state;
    
    const notification_state=  await sensorThresholds.findOneAndUpdate({sensor:sensorName}, { notifications: sensorState }, { new: true });
    if(!notification_state){
        return res.status(400).json({ message: "Error setting notification state for ",sensorName });
    }
    res.status(200).json({ message: "Sensor's notification state updated successfully" });
}
module.exports = {saveSensorReadings,
                    getSensorsReadings,
                    getSensorMinMaxReading,
                    getSensorsState,
                    setSensorsState,
                    setSensorsThresholds,
                    setSensorState,
                    getSensorReadings};
const sensorReading= require('../Models/sensor.readings.model');
const sensorThresholds= require('../Models/sensor.thresholds.model');
const sensorsState= require('../Models/sensors.state.model');
const notifications = require ('../Models/notifications.model')
const validSensorNames = ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'];
const validSensorStates = ['on', 'off'];
const { setDeviceState } = require('./devices.controller');

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
            createNotifications(req);
            setDeviceState();
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

        if (readings[0].AQI < 20) {
            state.AQI = 'Dangerous';} 
        else if (readings[0].AQI < 40) 
            {state.AQI = 'Bad';} 
        else if (readings[0].AQI < 60) 
            {state.AQI = 'Unhealthy';} 
        else if (readings[0].AQI < 80) 
            {state.AQI = 'Moderate';} 
        else if (readings[0].AQI < 90) 
            {state.AQI = 'Good';} 
        else 
            {state.AQI = 'Perfect';}

        if (readings[0].CO < 20) {
            state.CO = 'Perfect';} 
        else if (readings[0].CO < 40) 
            {state.CO = 'Good';} 
        else if (readings[0].CO < 60) 
            {state.CO = 'Fair';} 
        else if (readings[0].CO < 80) 
            {state.CO = 'Moderate';} 
        else 
            {state.CO = 'Dangerous';}

        if (readings[0].CO2 < 20) {
            state.CO2 = 'Perfect';} 
        else if (readings[0].CO2 < 40) 
            {state.CO2 = 'Good';} 
        else if (readings[0].CO2 < 60) 
            {state.CO2 = 'Fair';}
        else if (readings[0].CO2 < 80) 
            {state.CO2 = 'Moderate';} 
        else 
            {state.CO2 = 'Dangerous';}

        if (readings[0].Temp > 40 ) {
            state.Temp = 'Very Hot';} 
        else if (readings[0].Temp > 30) 
            {state.Temp = 'Hot';} 
        else if (readings[0].Temp >25) 
            {state.Temp = 'Fair';} 
        else if (readings[0].Temp >20) 
            {state.Temp = 'Good';} 
        else if (readings[0].Temp >16) 
            {state.Temp = 'Cold';} 
        else 
            {state.Temp = 'Very Cold';}
        
        if (readings[0].Humidity > 60) {
            state.Humidity = 'Very Humid';} 
        else if (readings[0].Humidity > 50) 
            {state.Humidity = 'Humid';} 
        else if (readings[0].Humidity > 40) 
            {state.Humidity = 'Fair';} 
        else if (readings[0].Humidity > 35) 
            {state.Humidity = 'Good';} 
        else 
            {state.Humidity = 'Perfect';}

            const result = {readings : readings[0], state}
        res.json(result);
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
const setSensorsNotificationAndThresholds = async (req,res) =>{
    try{
        const sensorName= req.params.sensor_name;
        const minValue = req.params.min;
        const maxValue = req.params.max;
        const state = req.params.state;
        if (!isNaN(minValue) && !isNaN(maxValue)){
            const sensor = await sensorThresholds.findOne({ sensor: sensorName });
            if (!sensor) {
                return res.status(404).json({ error: 'Sensor not found' });}
            sensor.minValue = minValue;
            sensor.maxValue = maxValue;
            sensor.notifications = state;
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
const getSensorsNotificationAndThresholds = async (req,res)=>{
    const thresholdsAndState = {};
    const sensors = ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'];
    for (const sensor of sensors) {
        const data = await sensorThresholds.findOne({ sensor });
        thresholdsAndState[sensor] = {
          "min": data.minValue,
          "max": data.maxValue,
          "notifications": data.notifications,
        };
      }
      return res.json(thresholdsAndState);
};
const createNotifications = async (req,res) => {
    const {AQI, CO , CO2 , Temp , Humidity} = req.body;
    const thresholds = await sensorThresholds.find();

    let AQINotification  = await notifications.findOne({ sensorName:"AQI" });
    if (!AQINotification) {
        AQINotification = new notifications({
          sensorName: "AQI",
          thresholdCrossed: false,
          action: "",
          fanOn: false,
          heaterOn: false,});}
    if(AQI<thresholds[0].minValue){
        AQINotification.thresholdCrossed =true;
        AQINotification.action =`AQI Level is too low ${AQI}%,It's minimum level is ${thresholds[0].minValue}%, Fan will turn on now`;
        AQINotification.fanOn =true;
    }
    else if(AQI>=thresholds[0].minValue){
        AQINotification.thresholdCrossed =false;
        AQINotification.action ='';
        AQINotification.fanOn =false;
    }
    await AQINotification.save();

    let CONotification  = await notifications.findOne({ sensorName:"CO" });
    if (!CONotification) {
        CONotification = new notifications({
          sensorName: "CO",
          thresholdCrossed: false,
          action: "",
          fanOn: false,
          heaterOn: false,});}
    if(CO>thresholds[1].maxValue){
        CONotification.thresholdCrossed =true;
        CONotification.action =`Carbon Monoxide Level is too high ${CO} PPM, It's maximum level is ${thresholds[1].maxValue} PPM, Fan will turn on now`;
        CONotification.fanOn =true;
    }
    else if(CO<=thresholds[1].maxValue){
        CONotification.thresholdCrossed =false;
        CONotification.action ='';
        CONotification.fanOn =false;
    }
    await CONotification.save();

    let CO2Notification  = await notifications.findOne({ sensorName:"CO2" });
    if (!CO2Notification) {
        CO2Notification = new notifications({
          sensorName: "CO2",
          thresholdCrossed: false,
          action: "",
          fanOn: false,
          heaterOn: false,});}
    if(CO2>thresholds[2].maxValue){
        CO2Notification.thresholdCrossed =true;
        CO2Notification.action =`Carbon Dioxide Level is too high ${CO2} PPM, It's maximum level is ${thresholds[2].maxValue} PPM, Fan will turn on now`;
        CO2Notification.fanOn =true;
    }
    else if(CO2<=thresholds[2].maxValue){
        CO2Notification.thresholdCrossed =false;
        CO2Notification.action ='';
        CO2Notification.fanOn =false;
    }
    await CO2Notification.save();

    let TempNotification  = await notifications.findOne({ sensorName:"Temp" });
    if (!TempNotification) {
        TempNotification = new notifications({
          sensorName: "Temp",
          thresholdCrossed: false,
          action: "",
          fanOn: false,
          heaterOn: false,});}
    if(Temp>thresholds[3].maxValue){
        TempNotification.thresholdCrossed =true;
        TempNotification.action =`Temperature is too High ${Temp}°C ,It's maximum level is ${thresholds[3].maxValue}°C, Fan will turn on now`;
        TempNotification.fanOn =true;
        TempNotification.heaterOn =false;
    }
    else if(Temp<=thresholds[3].maxValue && Temp>=thresholds[3].minValue){
        TempNotification.thresholdCrossed =false;
        TempNotification.action ='';
        TempNotification.fanOn =false;
        TempNotification.heaterOn =false;
    }
    else if(Temp<thresholds[3].minValue){
        TempNotification.thresholdCrossed =true;
        TempNotification.action =`Temperature is too Low ${Temp}°C ,It's minimum level is ${thresholds[3].minValue}°C, Heater will turn on now`;
        TempNotification.fanOn =false;
        TempNotification.heaterOn =true;
    }
    await TempNotification.save();

    let HumidityNotification  = await notifications.findOne({ sensorName:"Humidity" });
    if (!HumidityNotification) {
        HumidityNotification = new notifications({
          sensorName: "Humidity",
          thresholdCrossed: false,
          action: "",
          fanOn: false,
          heaterOn: false,});}
    if(Humidity>thresholds[4].maxValue){
        HumidityNotification.thresholdCrossed =true;
        HumidityNotification.action =`Carbon Dioxide Level is too high ${Humidity} PPM, It's maximum level is ${thresholds[4].maxValue} PPM, Fan will turn on now`;
        HumidityNotification.fanOn =true;
    }
    else if(Humidity<=thresholds[4].maxValue){
        HumidityNotification.thresholdCrossed =false;
        HumidityNotification.action ='';
        HumidityNotification.fanOn =false;
    }
    await HumidityNotification.save();
};
const getNotificationsList= async(req,res)=>{
    try{
        const data= await notifications.find({thresholdCrossed:true}).select('sensorName action timestamp');
        const formattedData = data.map(item=>(
            {sensorName:item.sensorName,
            action:item.action,
             timestamp: new Date (item.timestamp).toLocaleTimeString(),}));
        res.status(200).json(formattedData);
    } catch(err){
        res.status(500).json({ error: "Error retrieving notifications" });
    }
}
module.exports = {saveSensorReadings,
                    getSensorsReadings,
                    getSensorMinMaxReading,
                    getSensorsState,
                    setSensorsState,
                    setSensorsNotificationAndThresholds,
                    setSensorState,
                    getSensorReadings,
                    getSensorsNotificationAndThresholds,
                    createNotifications,
                    getNotificationsList};



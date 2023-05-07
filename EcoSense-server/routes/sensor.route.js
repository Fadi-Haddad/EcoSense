const express = require('express');
const {
    saveSensorReadings,
    getSensorsReadings,
    getSensorMinMaxReading,
    getSensorsState,
    setSensorsState,
    setSensorsThresholds,
    setSensorState,
    getSensorReadings,
    getSensorsNotificationAndThresholds
    } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/save", saveSensorReadings);
router.get("/get_all_readings", getSensorsReadings);
router.get("/get_sensor_readings/:sensor_name", getSensorReadings);
router.get("/get_sensors_state", getSensorsState);
router.get("/set_sensors_state/:state", setSensorsState);
router.get("/get/:sensor_name/min_max", getSensorMinMaxReading);
router.get("/set/:sensor_name/:min/:max", setSensorsThresholds);
router.get("/get/thresholds_and_notification_state", getSensorsNotificationAndThresholds);
router.get("/set_state/:sensor_name/:state", setSensorState);
module.exports = router;
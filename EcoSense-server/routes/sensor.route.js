const express = require('express');
const { saveSensorReadings, getSensorReadings,getSensorMinReading,getSensorMaxReading } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/save", saveSensorReadings);
router.get("/get", getSensorReadings);
router.get("/get/:sensor_name/min", getSensorMinReading);
router.get("/get/:sensor_name/max", getSensorMaxReading);
module.exports = router;
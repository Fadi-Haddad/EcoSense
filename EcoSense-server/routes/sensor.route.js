const express = require('express');
const { saveSensorReadings, getSensorReadings,getSensorMinReading } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/save", saveSensorReadings);
router.get("/get", getSensorReadings);
router.get("/get/:sensor_name/min", getSensorMinReading);
module.exports = router;
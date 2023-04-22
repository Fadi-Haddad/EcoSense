const express = require('express');
const { getSensorReadings } = require("../Controllers/sensor.controller");

const router = express.Router();
router.post("/", getSensorReadings);
module.exports = router;
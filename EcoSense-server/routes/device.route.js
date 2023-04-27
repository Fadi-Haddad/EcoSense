const express = require('express');
const { setFanState } = require("../Controllers/devices.controller");
const router = express.Router();
router.get("/set_fan_state/:fan_operation_mode/:fan_state", setFanState);
// router.get("/set_heater_state/:heater_operation_mode/:heater_state", setHeaterState);

module.exports  = router;
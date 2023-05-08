const express = require('express');
const { setFanState,setHeaterState,getDevicesState } = require("../Controllers/devices.controller");
const router = express.Router();
router.get("/set_fan_state/:fan_operation_mode/:fan_state", setFanState);
router.get("/set_heater_state/:heater_operation_mode/:heater_state", setHeaterState);
router.get("/get_devices_state", getDevicesState);

module.exports  = router;
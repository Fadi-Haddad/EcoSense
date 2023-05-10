const { Router } = require("express");
const router  = Router();
const {authMiddleware} = require ("../middlewares/auth.middleware.js")

const {
  saveSensorReadings,
  getSensorsReadings,
  getSensorMinMaxReading,
  getSensorsState,
  setSensorsState,
  setSensorsNotificationAndThresholds,
  setSensorState,
  getSensorReadings,
  getSensorsNotificationAndThresholds,
  getNotificationsList,
  } = require("../Controllers/sensor.controller");

  const { setFanState,setHeaterState,getDevicesState } = require("../Controllers/devices.controller");

router.post("/save", saveSensorReadings);
router.get("/get_all_readings",authMiddleware, getSensorsReadings);
router.get("/get_sensor_readings/:sensor_name",authMiddleware, getSensorReadings);
router.get("/get_sensors_state",authMiddleware, getSensorsState);
router.get("/set_sensors_state/:state",authMiddleware, setSensorsState);
router.get("/get/:sensor_name/min_max",authMiddleware, getSensorMinMaxReading);
router.get("/set/:sensor_name/:min/:max/:state",authMiddleware, setSensorsNotificationAndThresholds);
router.get("/get/thresholds_and_notification_state",authMiddleware, getSensorsNotificationAndThresholds);
router.get("/set_state/:sensor_name/:state",authMiddleware, setSensorState);
router.get("/get_notifications_list",authMiddleware, getNotificationsList);

router.get("/set_fan_state/:fan_operation_mode/:fan_state",authMiddleware, setFanState);
router.get("/set_heater_state/:heater_operation_mode/:heater_state",authMiddleware, setHeaterState);
router.get("/get_devices_state", getDevicesState);

module.exports = router;
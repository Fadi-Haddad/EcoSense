const express = require('express');

const router = express.Router();
router.get("/set_device_state/:device/:state", setDeviceState);

module.exports  = router;
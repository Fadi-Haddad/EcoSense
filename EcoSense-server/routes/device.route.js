const express = require('express');

const router = express.Router();
router.get("/set_fan_state/:fan_operation_mode/:fan_state", setFanState);

module.exports  = router;
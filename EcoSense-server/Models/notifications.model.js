const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    sensorName: {
      type: String,
      required: true,
      enum: ['AQI', 'CO', 'CO2', 'Temp', 'Humidity'],
    },
    thresholdCrossed: {
      type: Boolean,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });

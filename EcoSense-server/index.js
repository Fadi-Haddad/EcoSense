const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.listen(port, () => {
     console.log(`app is listening on port ${port}`)});

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db =mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open",()=>{console.log("connected to",MONGODB_URI)} );

const dataroute = require("./routes/sensor.route");
app.use("/data",dataroute);

const deviceroute = require("./routes/device.route");
app.use("/device",deviceroute);

const authroute = require("./routes/auth.route");
app.use("/auth",authroute);


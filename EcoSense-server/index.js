const express = require('express');
const app = express();
const config = require('./config');
const dotenv = require('dotenv');
dotenv.config();

const port = config.port;
const MONGODB_URI = config.database.uri;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db =mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open",()=>{console.log("connected to",MONGODB_URI)} );

const authroute = require("./routes/auth.route");
const loginroute = require("./routes/login.route");
app.use("/data",authroute);
app.use("/device",authroute);
app.use("/auth",loginroute);

const server = app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

server.on('error', (error) => {
  console.error(`Server error: ${error}`);
});
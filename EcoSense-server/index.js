const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
     console.log(`app listening on port ${port}`)});

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
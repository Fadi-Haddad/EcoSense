const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)});
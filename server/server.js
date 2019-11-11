const express = require('express');
const config = require('config');
const PORT = config.get('PORT')
const connectDB = require('./config/db');
const app = express();


connectDB();


app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`);
})







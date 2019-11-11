const express = require('express');
const config = require('config');
const PORT = config.get('PORT')

const app = express();





app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`);
})







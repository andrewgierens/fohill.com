const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT;

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3099;
const database = require('../database');
const controller = require('./Controller/fetchNode.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public'))

app.get('/nodes', controller.fetchNode);

app.listen(port, () => console.log(`matrix monitoring gyrosyncopation on port ${port}!`))
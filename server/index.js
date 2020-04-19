const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3099;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public'))

app.listen(port, () => console.log(`matrix monitoring gyrosyncopation on port ${port}!`))
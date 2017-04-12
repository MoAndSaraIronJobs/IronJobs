
const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());



app.listen(3000, function startServer() {
  console.log('Server is up!');
});

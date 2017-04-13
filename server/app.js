
const express = require('express');
const bodyParser = require('body-parser');

require('./database-setup.js');

let app = express();

app.use(bodyParser.json());

app.use('/api/jobs', require('./routes/jobs.routes.js'));
app.use(require('./middleware/error-handler.middleware.js'));



app.listen(3000, function startServer() {
  console.log('Server is up!');
});

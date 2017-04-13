const mongoose = require('mongoose');

if(!process.env.MY_DB_LOCATION) {
  console.error('No database detected!');
  process.exit(1337);
}

mongoose.connect(process.env.DB_LOCATION);

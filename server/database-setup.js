const mongoose = require('mongoose');

console.log('in db setup', process.env.MONGODB_URI);

if(!process.env.MONGODB_URI) {
  console.error('No database detected!');
  process.exit(128);
}

mongoose.connect(process.env.MONGODB_URI);

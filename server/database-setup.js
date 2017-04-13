const mongoose = require('mongoose');

if(!process.env.MONGODB_URI) {
  console.error('No database detected!');
  process.exit(128);
}

mongoose.connect(process.env.MONGODB_URI);

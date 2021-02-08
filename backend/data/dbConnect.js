const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
const connection = {};

async function dbConnect() {
  if(connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DATA_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

   mongoose.connection.on('connected', () => {
    console.warn('mongoose connected');
  });


  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

module.exports = dbConnect;



const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ewelty:Kl5m9Gt624Fz@cluster0.c7a5tyj.mongodb.net/weatherapp-part4';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));


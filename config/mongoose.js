const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/testing-mongoose?authSource=admin'); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error!'));
db.once('open', () => console.log('Connection Established'))
const mongoose = require('mongoose');
const config = require('../config');

mongoose.connection.on('error', (error) => {
    console.log('Connect error, msg is ', error);
});

mongoose.connection.once('open', () => {
    console.log('Connect success!');
});

mongoose.connect(config.db.mongoHost);

require('./cat');
require('./User');


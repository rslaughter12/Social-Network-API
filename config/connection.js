const { connect. connection } = require('mongoose');

connect('mongodb://localhost:27017/socialAPI');

module.exports = connection;

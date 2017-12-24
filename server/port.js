const argv = require('./argv');
const env = require('../.env');

module.exports = parseInt(argv.port || env.PORT || '3000', 10);

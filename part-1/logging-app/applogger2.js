var logger = require('./alternativeLogger');

var myLog = logger();

myLog.log('Second simple log message');
myLog.info('Second simple info message');
myLog.error('Second simple error message');

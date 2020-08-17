const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, printf, label, colorize, simple } = winston.format;
const config = require('config');


// Format in which logs will be maintained in the logs file.
const myFormat = printf(({ timestamp, level, message, label }) => {
  return `{"timestamp": "${ timestamp }","level": "${ level }","message": "${ message }","filename": "${ label }"}`
});

/**
 * Logger configuration
 */
const logger = function (module) {
  var path = module.filename.split('/').slice(-2).join('/');

  return new winston.createLogger({
    level: config.logger.level,
    transports: [
      // Logs shown in console
      new winston.transports.Console({
        format: combine(
          colorize(),
          simple(),
        ),
      }),
      // Logs maintained in logs file
      new winston.transports.DailyRotateFile({
        filename: './logs/InfinityReadsLogs-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        maxFiles: '7d',
        format: combine(
          label({ label: path }),
          timestamp(),
          myFormat,
        )
      }),
    ],
  });
}

module.exports = logger;

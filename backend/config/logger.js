// /config/logger.js

const winston = require("winston");

// Define log levels
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    verbose: "cyan",
    debug: "blue",
    silly: "grey",
  },
};

// Create the logger instance
const logger = winston.createLogger({
  levels: logLevels.levels,
  transports: [
    new winston.transports.Console({
      level: "debug", // show all logs with 'debug' or higher severity
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "logs/app.log", // logs all errors and above into file
      level: "error", // logs only error level messages in file
      format: winston.format.combine(winston.format.json()),
    }),
  ],
});

// Export the logger and stream for morgan
logger.stream = {
  write: (message) => logger.http(message.trim()),
};

module.exports = logger;

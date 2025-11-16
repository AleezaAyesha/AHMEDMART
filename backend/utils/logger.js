const { createLogger, format, transports } = require("winston");
const path = require("path");

// Define log file path
const logPath = path.join(__dirname, "../logs/app.log");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: logPath, level: "info" }),
    new transports.Console({ level: "debug" }) // optional: logs to console
  ],
});

module.exports = logger;

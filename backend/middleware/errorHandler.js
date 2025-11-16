// /middleware/errorHandler.js

const logger = require("../config/logger");

const errorHandler = (err, req, res, next) => {
  logger.error(err.message || err);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
};

module.exports = errorHandler;

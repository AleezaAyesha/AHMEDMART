// utils/response.js

// SUCCESS RESPONSE (standard format used across controllers)
exports.success = (message = "Request successful", data = null) => {
  return {
    success: true,
    message,
    data
  };
};

// ERROR RESPONSE (standard format used across controllers)
exports.error = (message = "Something went wrong") => {
  return {
    success: false,
    message
  };
};

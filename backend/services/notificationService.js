// services/notificationService.js
const sendSMS = async (phoneNumber, message) => {
  console.log(`SMS sent to ${phoneNumber}: ${message}`);
  return true; // mock success
};

module.exports = { sendSMS };

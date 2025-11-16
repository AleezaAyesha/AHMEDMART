// backend/models/WhatsAppMessage.js
const mongoose = require("mongoose");

const WhatsAppMessageSchema = new mongoose.Schema({
  templateName: { type: String, required: true },
  messageText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("WhatsAppMessage", WhatsAppMessageSchema);

// backend/routes/notificationRoutes.js

const express = require("express");
const router = express.Router();
const { sendWhatsApp, sendSMS } = require("../services/notificationService");

// @route   POST /api/notifications/whatsapp
// @desc    Send a WhatsApp message
// @body    { "to": "+919999999999", "message": "Hello!" }
router.post("/whatsapp", async (req, res) => {
  try {
    const { to, message } = req.body;
    if (!to || !message) {
      return res.status(400).json({ success: false, message: "To and message are required" });
    }
    const response = await sendWhatsApp(to, message);
    res.json({ success: true, message: "WhatsApp sent!", data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/notifications/sms
// @desc    Send an SMS message
// @body    { "to": "+919999999999", "message": "Hello!" }
router.post("/sms", async (req, res) => {
  try {
    const { to, message } = req.body;
    if (!to || !message) {
      return res.status(400).json({ success: false, message: "To and message are required" });
    }
    const response = await sendSMS(to, message);
    res.json({ success: true, message: "SMS sent!", data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

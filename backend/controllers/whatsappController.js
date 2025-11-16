const whatsappService = require("../services/whatsappService");

// Send a single WhatsApp message
exports.sendMessage = async (req, res) => {
  try {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ success: false, message: "Missing 'to' or 'message' field" });
    }

    const response = await whatsappService.sendWhatsAppMessage(to, message);

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Send an order update message
exports.sendOrderUpdate = async (req, res) => {
  try {
    const { to, orderId, status } = req.body;

    if (!to || !orderId || !status) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const msg = `Your order #${orderId} is now: ${status}`;
    const response = await whatsappService.sendWhatsAppMessage(to, msg);

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Send OTP
exports.sendOTP = async (req, res) => {
  try {
    const { to, otp } = req.body;

    if (!to || !otp) {
      return res.status(400).json({ success: false, message: "Missing phone number or OTP" });
    }

    const msg = `Your AHMEDMART OTP is: ${otp}`;
    const response = await whatsappService.sendWhatsAppMessage(to, msg);

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

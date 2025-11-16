const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsappController");

// Send simple message
router.post("/send", whatsappController.sendMessage);

// Send order update
router.post("/order-update", whatsappController.sendOrderUpdate);

// Send OTP
router.post("/send-otp", whatsappController.sendOTP);

module.exports = router;

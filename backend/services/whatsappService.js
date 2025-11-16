const axios = require("axios");

exports.sendWhatsAppMessage = async (to, message) => {
  const apiUrl = process.env.WHATSAPP_API_URL;
  const token = process.env.WHATSAPP_TOKEN;

  if (!apiUrl || !token) {
    throw new Error("WhatsApp API credentials missing in .env");
  }

  const payload = {
    to,
    message,
  };

  const response = await axios.post(`${apiUrl}?token=${token}`, payload);

  return response.data;
};

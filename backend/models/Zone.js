// /models/Zone.js

const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  area: { type: String, required: true },
  deliveryFee: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Zone", zoneSchema);

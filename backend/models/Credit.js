// /models/Credit.js

const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true, default: 0 },
  transactionType: { type: String, enum: ['deposit', 'withdrawal'], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Credit", creditSchema);

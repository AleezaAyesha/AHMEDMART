// services/creditService.js
const User = require("../models/User");

exports.addCredit = async (userId, amount) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  user.credit = (user.credit || 0) + amount;
  await user.save();
  return user.credit;
};

exports.deductCredit = async (userId, amount) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  if ((user.credit || 0) < amount) throw new Error("Insufficient credit");
  user.credit -= amount;
  await user.save();
  return user.credit;
};

exports.getCredit = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");
  return user.credit || 0;
};

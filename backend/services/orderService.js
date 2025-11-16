// services/orderService.js
const Order = require("../models/Order");

exports.placeOrder = async (orderData) => {
  const newOrder = new Order(orderData);
  await newOrder.save();
  return newOrder;
};

exports.updateOrderStatus = async (orderId, status) => {
  return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
};

exports.getOrders = async (filter = {}) => {
  return await Order.find(filter);
};

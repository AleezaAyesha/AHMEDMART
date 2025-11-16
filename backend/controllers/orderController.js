
// /controllers/orderController.js

const Order = require("../models/Order");
const Product = require("../models/Product");
const { successResponse, errorResponse } = require("../utils/response");

exports.createOrder = async (req, res) => {
  try {
    const { vendor, products, deliveryAddress } = req.body;

    let totalAmount = 0;

    for (let item of products) {
      const foundProduct = await Product.findById(item.product);

      if (!foundProduct) return errorResponse(res, "Product not found", 404);

      totalAmount += foundProduct.price * item.quantity;
    }

    const order = new Order({
      customer: req.user.id,
      vendor,
      products,
      deliveryAddress,
      totalAmount,
    });

    await order.save();

    successResponse(res, order, "Order placed successfully");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id })
      .populate("products.product", "name price")
      .populate("vendor", "name email");

    successResponse(res, orders);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

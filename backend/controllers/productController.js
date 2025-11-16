// /controllers/productController.js

const Product = require("../models/Product");
const Vendor = require("../models/Vendor");
const { successResponse, errorResponse } = require("../utils/response");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      vendor: req.user.id,
      ...req.body,
    });

    await product.save();

    successResponse(res, product, "Product created successfully");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("vendor", "name email phoneNumber");

    successResponse(res, products);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("vendor", "name address");

    if (!product) return errorResponse(res, "Product not found", 404);

    successResponse(res, product);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

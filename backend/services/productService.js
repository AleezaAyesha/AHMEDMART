// services/productService.js
const Product = require("../models/Product");

exports.addProduct = async (productData) => {
  const newProduct = new Product(productData);
  await newProduct.save();
  return newProduct;
};

exports.updateProduct = async (productId, updatedData) => {
  return await Product.findByIdAndUpdate(productId, updatedData, { new: true });
};

exports.getProducts = async () => {
  return await Product.find();
};

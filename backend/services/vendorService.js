// services/vendorService.js
const Vendor = require("../models/Vendor");
const Product = require("../models/Product");

exports.registerVendor = async (vendorData) => {
  const existingVendor = await Vendor.findOne({ email: vendorData.email });
  if (existingVendor) throw new Error("Vendor exists");
  const newVendor = new Vendor(vendorData);
  await newVendor.save();
  return newVendor;
};

exports.updateVendor = async (vendorId, updatedData) => {
  return await Vendor.findByIdAndUpdate(vendorId, updatedData, { new: true });
};

exports.getVendorProducts = async (vendorId) => {
  return await Product.find({ vendorId });
};

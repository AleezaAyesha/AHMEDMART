// /controllers/vendorController.js

const Vendor = require("../models/Vendor");
const { successResponse, errorResponse } = require("../utils/response");

exports.getVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findOne({ _id: req.user.id });

    if (!vendor) return errorResponse(res, "Vendor not found", 404);

    successResponse(res, vendor);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.updateVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.user.id, req.body, { new: true });

    if (!vendor) return errorResponse(res, "Vendor not found", 404);

    successResponse(res, vendor, "Vendor profile updated");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

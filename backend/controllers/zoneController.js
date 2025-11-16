// /controllers/zoneController.js

const Zone = require("../models/Zone");
const { successResponse, errorResponse } = require("../utils/response");

exports.getAllZones = async (req, res) => {
  try {
    const zones = await Zone.find();
    successResponse(res, zones);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getZoneById = async (req, res) => {
  try {
    const zone = await Zone.findById(req.params.id);

    if (!zone) return errorResponse(res, "Zone not found", 404);

    successResponse(res, zone);
  } catch (err) {
    errorResponse(res, err.message);
  }
};

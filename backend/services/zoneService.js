// services/zoneService.js
const Zone = require("../models/Zone");

exports.createZone = async (zoneData) => {
  const newZone = new Zone(zoneData);
  await newZone.save();
  return newZone;
};

exports.getAllZones = async () => {
  return await Zone.find();
};

exports.getZoneById = async (zoneId) => {
  return await Zone.findById(zoneId);
};

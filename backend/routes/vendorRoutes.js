// /routes/vendorRoutes.js

const express = require("express");
const router = express.Router();
const { getVendorProfile, updateVendorProfile } = require("../controllers/vendorController");
const authenticate = require("../middleware/auth");
const roleMiddleware = require("../middleware/roles");

router.get("/profile", authenticate, roleMiddleware("vendor"), getVendorProfile);
router.put("/profile", authenticate, roleMiddleware("vendor"), updateVendorProfile);

module.exports = router;

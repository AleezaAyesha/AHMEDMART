// /routes/orderRoutes.js

const express = require("express");
const router = express.Router();
const { createOrder, getAllOrders } = require("../controllers/orderController");
const authenticate = require("../middleware/auth");

router.post("/create", authenticate, createOrder);
router.get("/", authenticate, getAllOrders);

module.exports = router;

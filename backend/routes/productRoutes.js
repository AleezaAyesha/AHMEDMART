// /routes/productRoutes.js

const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts, getProductById } = require("../controllers/productController");
const authenticate = require("../middleware/auth");
const roleMiddleware = require("../middleware/roles");

router.post("/create", authenticate, roleMiddleware("vendor"), createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;

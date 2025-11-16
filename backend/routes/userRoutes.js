const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User registration
router.post("/register", userController.register);

// User login
router.post("/login", userController.login);

// Get user profile
router.get("/:id", userController.getUser);

// Update user profile
router.put("/:id", userController.updateProfile);

// Delete user (optional, make sure you have a function in controller)
router.delete("/:id", userController.deleteUser);

module.exports = router;


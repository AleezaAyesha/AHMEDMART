// backend/services/userService.js

const User = require("../models/User");
const bcrypt = require("bcryptjs");

/**
 * Register a new user
 * @param {Object} userData - { name, email, password, phoneNumber, role, address }
 * @returns {Promise<User>}
 */
async function registerUser(userData) {
  const { name, email, password, phoneNumber, role, address } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Create user
  const user = new User({
    name,
    email,
    password,
    phoneNumber,
    role: role || "customer",
    address: address || "",
  });

  await user.save();
  return user;
}

/**
 * Authenticate user
 * @param {String} email
 * @param {String} password
 * @returns {Promise<User>}
 */
async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  return user;
}

/**
 * Get all users
 */
async function getAllUsers() {
  return await User.find();
}

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
};

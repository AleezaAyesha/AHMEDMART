// controllers/userController.js

const authService = require("../services/authService");
const userService = require("../services/userService");
const creditService = require("../services/creditService");
const notificationService = require("../services/notificationService");
const { success, error } = require("../utils/response");

// REGISTER USER
exports.register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    return res.status(201).json(success("User registered successfully", user));
  } catch (err) {
    return res.status(400).json(error(err.message));
  }
};

// LOGIN USER
exports.login = async (req, res) => {
  try {
    const { token, user } = await authService.loginUser(
      req.body.email,
      req.body.password
    );
    return res.json(success("Login successful", { token, user }));
  } catch (err) {
    return res.status(400).json(error(err.message));
  }
};

// GET USER DETAILS
exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user.userId);
    if (!user) return res.status(404).json(error("User not found"));
    return res.json(success("User fetched successfully", user));
  } catch (err) {
    return res.status(500).json(error(err.message));
  }
};

// UPDATE USER PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const user = await userService.updateUserDetails(req.user.userId, req.body);
    return res.json(success("Profile updated", user));
  } catch (err) {
    return res.status(500).json(error(err.message));
  }
};

// ADD CREDIT
exports.addCredit = async (req, res) => {
  try {
    const updatedCredit = await creditService.addCredit(
      req.user.userId,
      req.body.amount
    );
    return res.json(success("Credit added", { credit: updatedCredit }));
  } catch (err) {
    return res.status(400).json(error(err.message));
  }
};

// DEDUCT CREDIT
exports.deductCredit = async (req, res) => {
  try {
    const updatedCredit = await creditService.deductCredit(
      req.user.userId,
      req.body.amount
    );
    return res.json(success("Credit deducted", { credit: updatedCredit }));
  } catch (err) {
    return res.status(400).json(error(err.message));
  }
};

// In controllers/userController.js
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userService.deleteUserById(userId);
    if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" });
    return res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// SEND NOTIFICATION TO USER
exports.sendNotification = async (req, res) => {
  try {
    const notify = await notificationService.notifyUser({
      email: req.body.email,
      phone: req.body.phone,
      whatsapp: req.body.whatsapp,
      subject: req.body.subject,
      message: req.body.message,
    });

    return res.json(success("Notification sent", notify));
  } catch (err) {
    return res.status(500).json(error(err.message));
  }
};

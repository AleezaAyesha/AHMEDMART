const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

// REGISTER USER
exports.registerUser = async (userData) => {
  const { email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ ...userData, password: hashedPassword });
  await newUser.save();

  // Remove password before returning
  const safeUser = newUser.toObject();
  delete safeUser.password;

  return safeUser;
};

// LOGIN USER
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Remove password before returning user
  const safeUser = user.toObject();
  delete safeUser.password;

  return { token, user: safeUser };
};

// VERIFY JWT
exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new Error("Invalid or expired token");
  }
};

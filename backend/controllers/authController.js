const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({ success: false, message: "User already exists" });

        const hashed = await bcrypt.hash(password, 12);

        const user = await User.create({ name, email, password: hashed });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        const safeUser = user.toObject();
        delete safeUser.password;

        res.status(201).json({ success: true, user: safeUser, token });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// LOGIN
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        const safeUser = user.toObject();
        delete safeUser.password;

        res.json({ success: true, user: safeUser, token });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// REFRESH TOKEN
exports.refreshToken = (req, res) => {
    try {
        const { token } = req.body;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const newToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ success: true, token: newToken });

    } catch {
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};


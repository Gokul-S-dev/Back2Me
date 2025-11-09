import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Detailed field validation with per-field error messages
        const errors = {};
        if (!name || !String(name).trim()) errors.name = "Name is required";
        if (!email || !String(email).trim()) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        if (Object.keys(errors).length)
            return res.status(400).json({ message: "Validation failed", errors });

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User Registered successfully", user });
    } catch (err) {
        // forward mongoose duplicate key errors to client for clarity
        if (err.code === 11000) {
            return res.status(400).json({ message: "Duplicate field value", details: err.keyValue });
        }
        res.status(500).json({ message: err.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const errors = {};
        if (!email || !String(email).trim()) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        if (Object.keys(errors).length)
            return res.status(400).json({ message: "Validation failed", errors });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });
        if (user.password !== password)
            return res.status(400).json({ message: "Incorrect password" });

        res.json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
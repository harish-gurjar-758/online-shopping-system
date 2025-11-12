import User from "../modules/user.module.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// Register new user
export const registerUser = async (req, res) => {
  try {
    const { userType, userName, userEmail, userPhone, userPassword, userLocation } = req.body;

    // Required field validation
    if (!userType || !userName || !userEmail || !userPhone || !userPassword || !userLocation) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);

    // Create new user
    const newUser = new User({
      userType,
      userName,
      userEmail,
      userPhone,
      userPassword: hashedPassword,
      userLocation,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error during registration", error: error.message });
  }
};

//  Login existing user
export const loginUser = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
      return res.status(400).json({ error: "Please provide both email and password." });
    }

    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.userEmail, type: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "365d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        userName: user.userName,
        userEmail: user.userEmail,
        userType: user.userType,
        userPhone: user.userPhone,
        userLocation: user.userLocation,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error during login", details: error.message });
  }
};

import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "./generateToken.js";
import sessionSchema from "../models/sessionSchema.js";

export const registerController = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            userName,
            email,
            password: hashedPassword,
        });


        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate request
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Generate Tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save or update session
        await sessionSchema.findOneAndUpdate(
            { user: user._id },
            {
                refreshToken,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
            {
                upsert: true,
                new: true,
            }
        );

        // Update login status (optional)
        user.isLoggedIn = true;
        await user.save();

        // Store Refresh Token in HTTP-only Cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });


        return res.status(200).json({
            success: true,
            message: "Login successful.",
            accessToken,
            data: user
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
};


export const logoutController = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(400).json({
                success: false,
                message: "No refresh token found",
            });
        }

        // Verify refresh token
        let decoded;
        try {
            decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET
            );
        } catch (err) {
            // Even if token is expired, still clear cookie
            res.clearCookie("refreshToken");
            return res.status(401).json({
                success: false,
                message: "Invalid or expired refresh token",
            });
        }

        // Delete session from DB
        await Session.findOneAndDelete({
            user: decoded.id,
            refreshToken,
        });

        // Optional: update user status
        await User.findByIdAndUpdate(decoded.id, {
            isLoggedIn: false,
        });

        // Clear cookie
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getProfileController = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findById(userId).select("-passWord");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
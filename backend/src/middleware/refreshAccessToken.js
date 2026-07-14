import jwt from "jsonwebtoken";
import Session from "../models/sessionSchema.js";
import User from "../models/userSchema.js";

export const refreshAccessToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "Refresh token missing",
            });
        }

        let decoded;

        try {
            decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token",
            });
        }

        const session = await Session.findOne({
            user: decoded.id,
            refreshToken,
        });

        if (!session) {
            return res.status(401).json({
                success: false,
                message: "Session not found",
            });
        }

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const newAccessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        res.setHeader("x-access-token", newAccessToken);

        req.userId = user._id;

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
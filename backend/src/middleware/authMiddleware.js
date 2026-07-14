import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token =
            req.headers.authorization?.split(" ")[1] ||
            req.cookies?.accessToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No access token, login required",
            });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.userId = decoded.id;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token",
        });
    }
};
import express from "express";
import { getProfileController, loginController, logoutController, registerController } from "../controllers/userController.js";
import { refreshAccessToken } from "../middleware/refreshAccessToken.js";

// optional: example protected controller

const userRoute = express.Router();

//
// 🔐 AUTH ROUTES
//

// Register
userRoute.post("/register", registerController);

// Login
userRoute.post("/login", loginController);

// Logout
userRoute.post("/logout", logoutController);

// Refresh token middleware route (optional direct use)
userRoute.post("/refresh", refreshAccessToken, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Token refreshed via middleware",
    });
});

//
// 🛡️ PROTECTED ROUTES
//

userRoute.get("/profile", refreshAccessToken, getProfileController);

export default userRoute;
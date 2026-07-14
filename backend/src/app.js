import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import userRoute from "./routes/userRoute.js";
import projectRoute from "./routes/projectRoute.js";
import contactRoute from "./routes/contactRoute.js";
import skillRoute from "./routes/skillRoute.js";

dotenv.config();

const app = express();

//
// 🔧 Middlewares
//

// JSON parser
app.use(express.json());

// Cookie parser (for refresh token cookie)
app.use(cookieParser());

// CORS setup (important for frontend + cookies)
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:8000",
        credentials: true,
    })
);

//
// 🛣️ Routes
//

app.use("/user", userRoute);
app.use("/project", projectRoute);
app.use("/contact", contactRoute);
app.use("/skill", skillRoute)

//
// 🩺 Health check route
//

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running 🚀",
    });
});

//
// ❌ Global error handler (optional but good practice)
//

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Something went wrong on the server",
    });
});

export default app;
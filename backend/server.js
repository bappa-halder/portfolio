import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./src/app.js";
import { dbConnect } from "./src/config/dbConnect.js";

dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
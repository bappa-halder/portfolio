import dotenv from "dotenv";
import app from "./src/app.js";
import { dbConnect } from "./src/config/dbConnect.js";

dotenv.config();

await dbConnect();

export default app;
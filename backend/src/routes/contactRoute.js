import express from "express";
import { sendMessage, sendOTP, verifyOTP } from "../controllers/contactController.js";

const contactRoute = express.Router()

contactRoute.post("/sendOTP", sendOTP);
contactRoute.post("/verifyOTP", verifyOTP);
contactRoute.post("/sendMessage", sendMessage);

export default contactRoute
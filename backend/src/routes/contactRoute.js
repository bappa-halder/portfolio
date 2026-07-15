import express from "express";
import { checkEmail, sendMessage, sendOTP, verifyOTP } from "../controllers/contactController.js";

const contactRoute = express.Router()

contactRoute.post("/sendOTP", sendOTP);
contactRoute.post("/verifyOTP", verifyOTP);
contactRoute.post("/sendMessage", sendMessage);
contactRoute.post("/checkEmail", checkEmail);

export default contactRoute
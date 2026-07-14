import { sendMail } from "../email/contactEmail.js"
import contactSchema from "../models/contactSchema.js"

export const sendMessage = async (req, res) => {
    try {
        const { fullName, email, message } = req.body
        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const contactMessage = await contactSchema.create({
            fullName, email, message
        })
        await sendMail(fullName, email, message)
        return res.status(201).json({
            success: true,
            message: "Email sent successfully",
            data: contactMessage
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
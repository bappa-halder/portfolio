// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const sendOTPMail = async (email, otp) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD
//             }
//         })
//         const mailConfig = {
//             from: process.env.EMAIL,
//             to: email,
//             subject: "Email Verification OTP",
//             html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
//                 <h2>Email Verification</h2>

//                 <p>Hello,</p>

//                 <p>Your One-Time Password (OTP) for email verification is:</p>

//                 <h1 style="letter-spacing: 6px; color: #2563eb;">
//                     ${otp}
//                 </h1>

//                 <p>This OTP is valid for <strong>5 minutes</strong>.</p>

//                 <p>If you didn't request this verification, you can safely ignore this email.</p>

//                 <br>

//                 <p>Thanks,<br>Your Website Team</p>
//             </div>
//             `
//         }
//         await transporter.sendMail(mailConfig)
//     } catch (error) {
//         throw new Error("Email not sent")
//     }
// }


import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

export const sendOTPMail = async (email, otp) => {
    try {
        const mailConfig = {
            from: `"Portfolio" <${process.env.EMAIL}>`,
            to: email,
            subject: "Email Verification OTP",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
                    <h2>Email Verification</h2>

                    <p>Hello,</p>

                    <p>Your One-Time Password (OTP) for email verification is:</p>

                    <h1 style="letter-spacing: 6px; color: #2563eb;">
                        ${otp}
                    </h1>

                    <p>This OTP is valid for <strong>5 minutes</strong>.</p>

                    <p>If you didn't request this verification, you can safely ignore this email.</p>

                    <br>

                    <p>Thanks,<br>Your Website Team</p>
                </div>
            `
        };

        await transporter.sendMail(mailConfig);

    } catch (error) {
        console.error("Send OTP Mail Error:", error);
        throw new Error("Email not sent");
    }
};
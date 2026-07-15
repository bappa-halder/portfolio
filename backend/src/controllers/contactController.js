import { sendContactMessage } from "../email/contactMessage.js";
import { sendOTPMail } from "../email/sendOTPMail.js";
import { sendReplyMail } from "../email/sendReplyMail.js";
import contactSchema from "../models/contactSchema.js"

// export const sendOTP = async (req, res) => {
//     try {
//         const { email } = req.body;

//         if (!email) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email is required"
//             });
//         }

//         const otp = Math.floor(1000 + Math.random() * 9000).toString();

//         const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 min

//         let contact = await Contact.findOne({ email });

//         if (contact) {
//             contact.fullName = fullName;
//             contact.message = message;
//             contact.otp = otp;
//             contact.otpExpires = otpExpires;
//             contact.isVerified = false;
//             await contact.save();
//         } else {
//             contact = await Contact.create({
//                 fullName,
//                 email,
//                 message,
//                 otp,
//                 otpExpires,
//                 isVerified: false
//             });
//         }

//         await sendOtpMail(email, otp);

//         return res.status(200).json({
//             success: true,
//             message: "OTP sent successfully"
//         });

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

export const checkEmail = async (req, res) => {
    try {
        const { email } = req.body
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            })
        }
        const user = await contactSchema.findOne({ email })
        if (!user) {
            return res.status(200).json({
                success: true,
                isVerified: false
            })
        }
        if (user.isVerified) {
            return res.status(200).json({
                success: true,
                isVerified: true
            })
        }
        return res.status(200).json({
            success: true,
            isVerified: false
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        const otp = Math.floor(1000 + Math.random() * 9000).toString();

        const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

        let contact = await contactSchema.findOne({ email });

        if (contact) {
            contact.otp = otp;
            contact.otpExpires = otpExpires;
            contact.isVerified = false;

            await contact.save();
        } else {
            contact = await contactSchema.create({
                email,
                otp,
                otpExpires,
                isVerified: false
            });
        }

        await sendOTPMail(email, otp);

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// export const verifyOTP = async (req, res) => {
//     try {
//         const { email, otp } = req.body;

//         const contact = await Contact.findOne({ email });

//         if (!contact) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         if (contact.otp !== otp) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid OTP"
//             });
//         }

//         if (contact.otpExpires < new Date()) {
//             return res.status(400).json({
//                 success: false,
//                 message: "OTP expired"
//             });
//         }

//         contact.isVerified = true;
//         contact.otp = null;
//         contact.otpExpires = null;

//         await contact.save();

//         return res.status(200).json({
//             success: true,
//             message: "Email verified successfully"
//         });

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: "Email and OTP are required"
            });
        }

        const contact = await contactSchema.findOne({ email });

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Email not found"
            });
        }

        if (contact.isVerified) {
            return res.status(400).json({
                success: false,
                message: "Email is already verified"
            });
        }

        if (!contact.otp || !contact.otpExpires) {
            return res.status(400).json({
                success: false,
                message: "OTP not found. Please request a new OTP."
            });
        }

        if (contact.otpExpires < new Date()) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired. Please request a new OTP."
            });
        }

        console.log("Stored OTP :", contact.otp);
        console.log("Received OTP :", otp);
        console.log("Stored Type :", typeof contact.otp);
        console.log("Received Type :", typeof otp);

        if (contact.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        contact.isVerified = true;
        contact.otp = null;
        contact.otpExpires = null;

        await contact.save();

        return res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const contact = await contactSchema.findOne({ email });

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Please verify your email first."
            });
        }

        if (!contact.isVerified) {
            return res.status(401).json({
                success: false,
                message: "Please verify your email first."
            });
        }

        await sendContactMessage(fullName, email, message);
        await sendReplyMail(fullName, email);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// export const sendMessage = async (req, res) => {
//     try {
//         const { email } = req.body;

//         const contact = await Contact.findOne({ email });

//         if (!contact) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         if (!contact.isVerified) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Please verify your email first."
//             });
//         }

//         await sendMail(
//             contact.fullName,
//             contact.email,
//             contact.message
//         );

//         return res.status(200).json({
//             success: true,
//             message: "Message sent successfully"
//         });

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// export const sendMessage = async (req, res) => {
//     try {
//         const { fullName, email, message } = req.body
//         if (!fullName || !email || !message) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             })
//         }

//         const contactMessage = await contactSchema.create({
//             fullName, email, message
//         })
//         await sendMail(fullName, email, message)
//         return res.status(201).json({
//             success: true,
//             message: "Email sent successfully",
//             data: contactMessage
//         })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
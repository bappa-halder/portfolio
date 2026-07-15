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

export const sendReplyMail = async (fullName, email) => {
    try {
        await transporter.sendMail({
            from: `"Bappa Halder" <${process.env.EMAIL}>`,
            to: email,
            subject: "I'm received your message",
            html: `
                <div style="font-family:Arial,sans-serif;padding:30px;">
                    <h2 style="color:#2563eb;">Thank You, ${fullName}! 👋</h2>

                    <p>I am successfully received your message.</p>

                    <p>I will review it and get back to you as soon as possible.</p>

                    <div style="margin:30px 0;padding:15px;background:#f8fafc;border-left:4px solid #2563eb;">
                        <strong>Status:</strong> Your message has been received successfully.
                    </div>

                    <p>Thank you for contacting me.</p>

                    <br>

                    <p>
                        Best Regards,<br>
                        <strong>Bappa Halder</strong>
                    </p>
                    <div style="text-align: left;">
            <img
        src="https://res.cloudinary.com/dawo2v1cc/image/upload/v1784046382/logo2_r919ld.png"
        alt="BH Portfolio"
        width="120"
        style="display:block; margin:0 0 20px;"
    />
    </div>
                </div>
            `
        });

    } catch (error) {
        console.error(error);
        throw new Error("Confirmation email not sent");
    }
};
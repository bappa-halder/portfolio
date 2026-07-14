import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (fullName, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    const mailConfig = {
      from: `${email}`,
      to: process.env.EMAIL,
      subject: "New Contact Message",
      html: `
            <h3>New Message from Contact Form</h3>
            <p><b>Name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p><body style="margin:0; padding:20px; background:#f4f7fb; font-family:Arial, Helvetica, sans-serif;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">

        <table
          role="presentation"
          width="600"
          cellspacing="0"
          cellpadding="0"
          style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);"
        >

          <!-- Header -->
          <tr>
            <td
              style="background:#2563eb; color:#ffffff; padding:24px; text-align:center;"
            >
              <h2 style="margin:0;">📩 New Contact Form Submission</h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333;">

              <p style="margin-top:0; font-size:16px;">
                You have received a new message from your website contact form.
              </p>

              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="border-collapse:collapse;"
              >
                <tr>
                  <td
                    style="font-weight:bold; width:120px; background:#f8fafc; border:1px solid #e5e7eb;"
                  >
                    Name
                  </td>
                  <td style="border:1px solid #e5e7eb;">
                    ${fullName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="font-weight:bold; background:#f8fafc; border:1px solid #e5e7eb;"
                  >
                    Email
                  </td>
                  <td style="border:1px solid #e5e7eb;">
                    <a href="mailto:${email}" style="color:#2563eb;">
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="font-weight:bold; background:#f8fafc; border:1px solid #e5e7eb; vertical-align:top;"
                  >
                    Message
                  </td>
                  <td style="border:1px solid #e5e7eb; white-space:pre-wrap; line-height:1.6;">
                    ${message}
                  </td>
                </tr>
              </table>

              <div style="margin-top:30px; text-align:center;">
                <a
                  href="mailto:${email}"
                  style="
                    background:#2563eb;
                    color:#ffffff;
                    text-decoration:none;
                    padding:12px 24px;
                    border-radius:6px;
                    display:inline-block;
                    font-weight:bold;
                  "
                >
                  Reply to ${fullName}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background:#f8fafc;
                text-align:center;
                padding:18px;
                color:#6b7280;
                font-size:13px;
              "
            >
              This email was automatically generated from your website's contact
              form.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
            `
    }
    await transporter.sendMail(mailConfig)
  } catch (error) {
    throw new Error("Email not sent")
  }
}
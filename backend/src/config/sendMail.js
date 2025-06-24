import nodemailer from "nodemailer";

const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("📨 Email sent to:", to); // ✅ check this in terminal
  } catch (error) {
    console.error("❌ Failed to send email:", error.message); // Check if this shows anything
  }
};

export default sendMail;
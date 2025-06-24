import ContactUs from "../models/contactModel.js";
import sendMail from "../config/sendMail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newContact = await ContactUs.create({
      name,
      email,
      subject,
      message,
    });

    // ✉️ Send Email to Admin
    await sendMail(
      "yashodathakre08082002@gmail.com", // Replace with your email
      `New Contact Request: ${subject}`, // Updated subject line
      `
            
            Contact Details:
            Name: ${name}
            Email: ${email} (Reply directly to this address)
            
            Message:
            "${message}"
            
            ---
            This message was sent via the contact form
              `.trim()
    );

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      contact: newContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

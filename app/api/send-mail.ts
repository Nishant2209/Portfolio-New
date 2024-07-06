import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstname, lastname, email, subject, query } = req.body;

  console.log(req.body);

  // Validate input data
  if (!firstname || !lastname || !email || !subject || !query) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  // Create a Nodemailer transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: "nishant220902@gmail.com",
    subject: subject,
    text: `Name: ${firstname + lastname}\nEmail: ${email}\n\nQuery:\n${query}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}

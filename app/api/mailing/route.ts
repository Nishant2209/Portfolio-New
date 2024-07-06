import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export async function handler(request: Request) {
  const req = await request.json();
  const method = await request.method;
  console.log(request);
  console.log(req);
  //   if (method !== "POST") {
  //     return Response.json({ message: "Method not allowed" });
  //   }

  const { firstname, lastname, email, subject, query } = req;
  // Validate input data
  if (!firstname || !lastname || !email || !subject || !query) {
    return Response.json({ message: "Invalid input data" });
  }

  // Create a Nodemailer transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "nishant220902@gmail.com",
      pass: "Manash@125269",
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
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error sending email" });
  }
}

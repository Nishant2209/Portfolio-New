"use server";

import { captureException } from "@sentry/nextjs";
import { createTransport } from "nodemailer";
import { ContactFormSchema } from "@/validation";

// Simple HTML escaping function for server-side
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export const handleSubmit = async (
  prevState: {
    statusCode: number;
    statusMessage: string;
  },
  form: FormData
) => {
  "use server";

  // Check if values exist before calling toString()
  const firstnameValue = form.get("firstname");
  const lastnameValue = form.get("lastname");
  const emailValue = form.get("email");
  const subjectValue = form.get("subject");
  const queryValue = form.get("query");

  // Validate if any required field is missing
  if (
    !firstnameValue ||
    !lastnameValue ||
    !emailValue ||
    !subjectValue ||
    !queryValue
  ) {
    return {
      statusCode: 400,
      statusMessage: "All fields are required. Please fill in all the fields.",
    };
  }

  // Convert to string and validate with Zod schema
  const formData = {
    firstname: firstnameValue.toString(),
    lastname: lastnameValue.toString(),
    email: emailValue.toString(),
    subject: subjectValue.toString(),
    query: queryValue.toString(),
  };

  // Server-side validation with Zod
  const validationResult = ContactFormSchema.safeParse(formData);
  if (!validationResult.success) {
    return {
      statusCode: 400,
      statusMessage:
        "Invalid input data. Please check your entries and try again.",
    };
  }

  const { firstname, lastname, email, subject, query } = validationResult.data;

  const mailer = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Implement proper rate limiting logic
  // Note: In production, use Redis or database for proper session tracking
  if (prevState.statusCode === 200) {
    return {
      statusCode: 429,
      statusMessage:
        "You have already submitted a message successfully. Please wait for a response before submitting again.",
    };
  }

  try {
    await mailer.sendMail({
      from: `Admin Contact Form <nishant220902@gmail.com>`,
      replyTo: email,
      sender: email,
      to: "nishant220902@gmail.com",
      subject: `${escapeHtml(firstname)} ${escapeHtml(
        lastname
      )} (${email}) sent you a message`,
      html: `<b>Subject:</b> ${escapeHtml(
        subject
      )}<br /><br /><b>Message:</b> ${escapeHtml(query)}`,
    });

    return {
      statusCode: 200,
      statusMessage:
        "Submitted successfully, I will get back to you as soon as possible!",
    };
  } catch (error) {
    console.log(error);
    captureException(error);
    return {
      statusCode: 500,
      statusMessage: "Something went wrong, please try again later.",
    };
  } finally {
    mailer.close();
  }
};

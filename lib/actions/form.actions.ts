"use server";

import { captureException } from "@sentry/nextjs";
import { createTransport } from "nodemailer";

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

  // Now it's safe to convert to string
  const firstname = firstnameValue.toString();
  const lastname = lastnameValue.toString();
  const email = emailValue.toString();
  const subject = subjectValue.toString();
  const query = queryValue.toString();

  const mailer = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  if (prevState.statusCode === 200 || prevState.statusCode === 400) {
    return {
      statusCode: 400,
      statusMessage:
        "You have already submitted a message. Please wait for a response. Thank you!",
    };
  }

  try {
    await mailer.sendMail({
      from: `Admin Contact Form <nishant220902@gmail.com>`,
      replyTo: email,
      sender: email,
      to: "nishant220902@gmail.com",
      subject: `${firstname} ${lastname} (${email}) sent you a message`,
      html: `<b>Subject:</b> ${subject}<br /><br /><b>Message:</b> ${query}`,
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

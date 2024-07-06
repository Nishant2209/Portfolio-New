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

  const firstname = form.get("firstname")!.toString();
  const lastname = form.get("lastname")!.toString();
  const email = form.get("email")!.toString();
  const subject = form.get("subject")!.toString();
  const query = form.get("query")!.toString();

  const mailer = createTransport({
    service: "gmail",
    auth: {
      user: "nishant220902@gmail.com",
      pass: "Manash@125269",
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

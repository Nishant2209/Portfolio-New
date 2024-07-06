"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/Label";
import { Input, TextArea } from "./ui/Input";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { handleSubmit } from "@/lib/actions/form.actions";
import { useFormState, useFormStatus } from "react-dom";
import { fromZodError } from "zod-validation-error";
import { ContactFormSchema } from "@/validation";

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  query: "",
};

interface ContactFormType {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  query: string;
}

const ContactUsPage = () => {
  const [formData, setFormData] = useState<ContactFormType>(initialValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<ContactFormType>(initialValue);
  const initialState = {
    statusCode: 0,
    statusMessage: "",
  };

  const [state, formActions] = useFormState(handleSubmit, initialState);

  useEffect(() => {
    if (state.statusCode === 200) setFormData(initialValue);
  }, [state]);

  useEffect(() => {
    const { success } = ContactFormSchema.safeParse(formData);

    setIsDisabled(!success);
  }, [formData]);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });

    const { success, error: zodError } =
      ContactFormSchema.shape[
        id as keyof typeof ContactFormSchema.shape
      ].safeParse(value);

    if (!success)
      setError({ ...error, [id]: fromZodError(zodError).details[0].message });
    else setError({ ...error, [id]: "" });
  };

  return (
    <div className="min-h-[110vh] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased py-28">
      <div className="max-w-5xl mx-auto p-4 z-50">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-white  text-center font-sans font-bold py-2">
          Eager to Connect? <span className="text-purple">Contact Me</span>
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-200">
          <form className="my-8" action={formActions}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="w-1/2">
                <Label htmlFor="firstname">
                  First name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstname"
                  placeholder="Enter your First Name"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                {error.firstname && (
                  <span className="mt-2 text-red-500">{error.firstname}</span>
                )}
              </div>
              <div className="w-1/2">
                <Label htmlFor="lastname">
                  Last name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastname"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                {error.lastname && (
                  <span className="mt-2 text-red-500">{error.lastname}</span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && (
                <span className="mt-2 text-red-500">{error.email}</span>
              )}
            </div>
            <div className="mb-4">
              <Label htmlFor="subject">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input
                id="subject"
                placeholder="Enter your Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
              {error.subject && (
                <span className="mt-2 text-red-500">{error.subject}</span>
              )}
            </div>
            <div className="mb-8">
              <Label htmlFor="query">
                Query <span className="text-red-500">*</span>
              </Label>
              <TextArea
                id="query"
                placeholder="Enter your query"
                rows={8}
                value={formData.query}
                onChange={handleChange}
              />
              {error.query && (
                <span className="mt-2 text-red-500">{error.query}</span>
              )}
            </div>
            <div
              className={cn({
                hidden: state.statusCode === 0,
                "flex items-center justify-center": state.statusCode !== 0,
              })}
            >
              {state.statusCode === 500 && (
                <span className="text-red-500">{state.statusMessage}</span>
              )}
              {state.statusCode === 400 && (
                <span className="text-yellow-500">{state.statusMessage}</span>
              )}
              {state.statusCode === 200 && (
                <span className="text-green-500">{state.statusMessage}</span>
              )}
            </div>

            <SubmitButton isDisabled={isDisabled || state.statusCode === 200} />

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

const SubmitButton = ({ isDisabled }: { isDisabled: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={cn(
        {
          "cursor-not-allowed": isDisabled,
          "cursor-pointer": !isDisabled,
        },
        "rounded-lg border-none bg-opacity-50 px-6 py-4 font-medium text-white outline-none placeholder:text-secondary bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      )}
    >
      {pending ? (
        <div className="flex flex-row items-center justify-center gap-4 align-middle">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-l-transparent border-r-transparent" />
          Submitting...
        </div>
      ) : (
        "Submit"
      )}
    </button>
  );
};
export default ContactUsPage;

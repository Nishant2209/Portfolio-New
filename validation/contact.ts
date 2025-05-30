import { z } from "zod";

export default z.object({
  firstname: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters")
    .regex(
      /^[a-zA-Z\s,.'-]+$/,
      "Name must only contain letters, spaces, commas, periods, and hyphens"
    ),
  lastname: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be at most 20 characters")
    .regex(
      /^[a-zA-Z\s,.'-]+$/,
      "Name must only contain letters, spaces, commas, periods, and hyphens"
    ),
  email: z.string().email("Email is invalid"),
  subject: z
    .string()
    .min(20, "Subject must be at least 20 characters")
    .max(100, "Subject must be at most 100 characters"),
  query: z
    .string()
    .min(50, "Query must be at least 50 characters")
    .max(500, "Query must be at most 500 characters"),
});

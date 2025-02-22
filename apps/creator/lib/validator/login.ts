import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .trim()
    .email("Invalid email address"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .trim(),
  role: z
    .enum(["BUYER", "CREATOR"], {
      required_error: "Role is required",
    })
    .default("BUYER"),
});

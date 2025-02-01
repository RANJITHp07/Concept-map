import { z } from "zod";

export const ScriptFormSchema = z.object({
  mainTitle: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(10, "Description must be at least 10 characters"),

  category: z.string({
    required_error: "Category is required",
    invalid_type_error: "Category must be a string",
  }),

  industryCategory: z.string({
    required_error: "Industry category is required",
    invalid_type_error: "Industry category must be a string",
  }),

  price: z
    .string({
      required_error: "Price is required",
      invalid_type_error: "Price must be a valid string",
    })
    .regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),

  currency: z.string({
    required_error: "Currency is required",
    invalid_type_error: "Currency must be a string",
  }),

  type: z.string({
    required_error: "Type is required",
    invalid_type_error: "Type must be a string",
  }),
});

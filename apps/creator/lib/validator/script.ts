import { z } from "zod";

export const ScriptFormSchema = z.object({
  mainTitle: z.string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be at most 100 characters"),

  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters"),

  category: z.string()
    .nonempty("Category is required"),
  genre: z.string()
    .nonempty("Category is required"),

  industryCategory: z.string()
    .nonempty("Industry category is required"),

  country: z.string()
    .nonempty("Country is required"),

  state: z.string()
    .nonempty("State is required"),
});

import { z } from "zod";

export const ScriptFormSchema = z.object({
  mainTitle: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().nonempty("Category is required"),
  industryCategory: z.string().nonempty("Industry category is required"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
  currency: z.string().nonempty("Currency is required"),
  type: z.string().nonempty("Type is required"),
});

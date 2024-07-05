import { z } from "zod";

export const clubSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  logo: z.string().trim().min(1, "Logo is required"),
  description: z.string().trim().min(1, "Description is required"),
  presidentName: z.string().trim().min(1, "Name of president is required"),
  presidentPassword: z
    .string()
    .trim()
    .min(8, "Password must be greater than 8 characters"),
  presidentEmail: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" }),
});

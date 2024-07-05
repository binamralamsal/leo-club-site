import { z } from "zod";

export const regionSchema = z.object({
  logo: z.string().trim().min(1, "Logo is required"),
  name: z.string().trim().min(1, "Name is required"),
  coordinatorName: z.string().trim().min(1, "Name of coordinator is required"),
  coordinatorPassword: z
    .string()
    .trim()
    .min(8, "Password must be greater than 8 characters"),
  coordinatorEmail: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" }),
});

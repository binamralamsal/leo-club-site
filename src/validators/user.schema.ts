import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  password: z.string().trim().min(8, "Password must be of 8 characters"),
  email: z.string().trim().email(),
  role: z.enum(["district", "user"]).optional(),
});

export const loginSchema = z.object({
  password: z.string().trim().min(8, "Password must be of 8 characters"),
  email: z.string().trim().email(),
});

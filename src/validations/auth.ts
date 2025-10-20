import { z } from "zod";

export const authSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type AuthFormData = z.infer<typeof authSchema>;

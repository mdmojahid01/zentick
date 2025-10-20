"use server";

import { signIn } from "@/auth";
import { authSchema } from "@/validations/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function googleSignIn() {
  try {
    await signIn("google", { redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "OAuthSignInError":
          return { error: "Error with Google sign-in" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}

export async function emailSignIn(formData: FormData) {
  const email = formData.get("email") as string;

  const validatedFields = authSchema.safeParse({ email });

  if (!validatedFields.success) {
    return { error: "Invalid email address" };
  }

  try {
    await signIn("resend", { email, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "EmailSignInError":
          return { error: "Error sending email" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}

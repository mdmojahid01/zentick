"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { authSchema, type AuthFormData } from "@/validations/auth";
import { googleSignIn, emailSignIn } from "@/lib/auth-actions";

export function AuthForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: AuthFormData) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const formData = new FormData();
      formData.append("email", data.email);

      const result = await emailSignIn(formData);

      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess("Check your email for the magic link!");
        form.reset();
      }
    });
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const result = await googleSignIn();

      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full h-12"
        type="button"
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        )}
        Continue with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <InputGroup className="h-12">
                    <InputGroupAddon align="inline-start">
                      <Mail className="h-4 w-4" />
                    </InputGroupAddon>
                    <InputGroupInput
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </InputGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full h-12" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Magic Link...
              </>
            ) : (
              "Send Magic Link"
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <div className="text-sm text-destructive text-center p-3 bg-destructive/10 rounded-md">
          {error}
        </div>
      )}

      {success && (
        <div className="text-sm text-green-600 text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
          {success}
        </div>
      )}
    </div>
  );
}

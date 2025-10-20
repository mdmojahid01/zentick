import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import Config from "./constant/config";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import {
  users,
  accounts,
  sessions,
  verificationTokens,
  authenticators,
} from "./db/schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  providers: [
    Google({
      clientId: Config.GOOGLE_CLIENT_ID!,
      clientSecret: Config.GOOGLE_CLIENT_SECRET!,
    }),
    Resend({
      apiKey: Config.RESEND_API_KEY!,
      from: Config.EMAIL_FROM!,
    }),
  ],
  pages: {
    signIn: "/auth",
  },
});

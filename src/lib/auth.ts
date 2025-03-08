import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { account, session, user, verification } from "./auth-schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
    }
  }),
  socialProviders: {
      google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          redirectURI: "http://localhost:3000/api/auth/callback/google",
      }
  },
});
// export const auth = betterAuth({
//     database: drizzleAdapter(db, {
//         provider: "pg", // or "mysql", "sqlite"
//         schema: schema
//     }),
    
//     socialProviders: { 
//       google: { 
//        enabled: true,
//        clientId: process.env.GOOGLE_CLIENT_ID as string, 
//        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
//        redirectURI: "http://localhost:3000/api/auth/callback/google"
//       } 
//    },
// });
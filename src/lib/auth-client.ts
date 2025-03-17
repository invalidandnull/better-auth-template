import { createAuthClient } from "better-auth/react"
import { stripeClient } from "@better-auth/stripe/client"
import { customSessionClient } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
  plugins: [
    stripeClient({
        subscription: true //if you want to enable subscription management
    }),
    customSessionClient<typeof auth>()
  ],
  baseURL: "http://localhost:3000",
})

export const {
  signIn,
  signOut,
  signUp,
  useSession
} = authClient;
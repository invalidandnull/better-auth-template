import { createAuthClient } from "better-auth/react"
import { stripeClient } from "@better-auth/stripe/client"

export const authClient = createAuthClient({
  plugins: [
    stripeClient({
        subscription: true //if you want to enable subscription management
    })
  ],
  baseURL: "http://localhost:3000",
})

export const {
  signIn,
  signOut,
  signUp,
  useSession
} = authClient;
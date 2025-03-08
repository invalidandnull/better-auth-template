import { createAuthClient } from "better-auth/react"

export const signInGoogle = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await authClient.signIn.social({
    provider: "google"
  })
}

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
})

export const {
  signIn,
  signOut,
  signUp,
  useSession
} = authClient;
"use server"
import { auth } from "@/lib/auth";


export const signInWithGoogle = async () => {
   await auth.api.signInSocial({
      body: {
          provider: "google",
      }
  });
}
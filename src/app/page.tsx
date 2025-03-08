"use client"
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { useSession } from "@/lib/auth-client";
// import SignInGoogle from "@/components/SignInGoogle";

// import { authClient } from "@/lib/auth-client";
// import { signInWithGoogle } from "@/server/users";

export default function Home() {
  const { data : session } = useSession()
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col gap-5">
      <div>{session?.user?.name}</div>
      {
        !session?.user && (
          <div>
            <SignIn />
          </div>
        )
      }
      {
        session?.user && (
          <div>
            <SignOut />
          </div>
        )
      }
      </div>
    </div>
  );
}

"use client"
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";
// import SignInGoogle from "@/components/SignInGoogle";

// import { authClient } from "@/lib/auth-client";
// import { signInWithGoogle } from "@/server/users";

export default function Home() {
  const { data : session } = useSession()
  const [activeSubscription, setActiveSubscription] = useState("")
  useEffect(() => {
    async function fetchSubscriptions() {
      const {data: subscriptions} = await authClient.subscription.list()
      const activeSubscription = subscriptions?.find(sub => sub.status === "active" || sub.status === "trialing"
      )?.plan;
      setActiveSubscription(activeSubscription||"")
    }
    fetchSubscriptions()
  }, [session])
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
            <div>
              <Button onClick={
                async () => {
                  await authClient.subscription.upgrade({
                    plan: "basic",
                    successUrl: "/",
                    cancelUrl: "/"
                  })
                }
              }>upgrade to basic</Button>
            </div>
            <div>
              {activeSubscription}
            </div>
            <SignOut />
          </div>
        )
      }
      </div>
    </div>
  );
}

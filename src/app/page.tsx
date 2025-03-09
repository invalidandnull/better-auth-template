"use client";

import { useEffect, useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const { data: session } = useSession();
  const [activeSubscription, setActiveSubscription] = useState("");
  
  useEffect(() => {
    async function fetchSubscriptions() {
      const { data: subscriptions } = await authClient.subscription.list();
      const activeSubscription = subscriptions?.find(
        (sub) => sub.status === "active" || sub.status === "trialing"
      )?.plan;
      setActiveSubscription(activeSubscription || "");
    }
    fetchSubscriptions();
  }, [session]);

  // if (!session?.user)
  //   return (
  //     <div className="flex justify-center h-screen items-center">
  //       <div className="size-8 animate-pulse rounded-full border bg-muted" />
  //     </div>
  //   );

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing activeSubscription={activeSubscription} />
      <FAQ />
      <Footer />
    </main>
  );
}

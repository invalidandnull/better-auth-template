import SignIn from "@/components/sign-in";
import { useSession } from "@/lib/auth-client";

export default function Hero() {
  const { data: session } = useSession();

  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mt-15">
          Your Ultimate SaaS Solution
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your workflow with our powerful platform. Built for teams who demand excellence.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          {!session?.user && (
            <div className="max-w-sm w-full">
              <SignIn />
            </div>
          )}
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold">10k+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SignOut from "@/components/sign-out";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">YourApp</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Hello, {session.user.name}</span>
                <SignOut />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

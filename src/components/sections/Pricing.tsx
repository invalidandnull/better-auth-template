import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { authClient, useSession } from "@/lib/auth-client";
import { motion } from "framer-motion";

interface PricingProps {
  activeSubscription: string;
}

export default function Pricing({ activeSubscription }: PricingProps) {
  const { data: session } = useSession();
  
  const handleUpgrade = async () => {
    await authClient.subscription.upgrade({
      plan: "basic",
      successUrl: "/",
      cancelUrl: "/"
    });
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out our platform",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24-hour support response time",
        "1GB storage limit",
        "Community access"
      ],
      action: "Current Plan",
      variant: "outline" as const
    },
    {
      name: "Basic",
      price: "$10",
      description: "Everything you need to grow your business",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "1-hour support response time",
        "100GB storage",
        "Priority support",
        "Custom integrations"
      ],
      action: "Upgrade to Basic",
      variant: "default" as const,
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                plan.highlight 
                  ? 'border-2 border-primary bg-primary/5 relative overflow-hidden' 
                  : 'border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white text-sm font-medium px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {session?.user && (
              <Button 
                variant={plan.variant}
                className="w-full"
                onClick={plan.name === "Basic" ? handleUpgrade : undefined}
                disabled={plan.name === "Basic" && activeSubscription === "basic"}
              >
                {activeSubscription === "basic" && plan.name === "Basic" 
                  ? "Current Plan" 
                  : plan.action}
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

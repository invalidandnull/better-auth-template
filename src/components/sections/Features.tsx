import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time.",
      icon: "🤝",
    },
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance.",
      icon: "📊",
    },
    {
      title: "Secure Storage",
      description: "Your data is protected with enterprise-grade encryption.",
      icon: "🔒",
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and save valuable time.",
      icon: "⚡",
    },
    {
      title: "24/7 Support",
      description: "Our expert team is always here to help you succeed.",
      icon: "💬",
    },
    {
      title: "Regular Updates",
      description: "We're constantly improving with new features.",
      icon: "🚀",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your business efficiently and scale your growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-full text-primary"
          >
            <span className="text-sm font-medium">And many more features coming soon!</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

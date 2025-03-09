import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the free trial period?",
      answer: "We offer a 14-day free trial on all plans. You can explore all features without any commitment, and no credit card is required to start your trial."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly billing cycles. You'll be billed on the same date each month, and you can cancel or change your plan at any time. We accept all major credit cards and PayPal."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. When you cancel, you'll still have access to your plan's features until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer full refunds within 30 days of your first subscription payment. For any issues or concerns, our support team is always here to help."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 email support for all users. Basic plan subscribers get priority support with 1-hour response times and access to our private community."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated and reflected in your next billing cycle."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white border rounded-lg">
                  <AccordionTrigger className="px-6 text-left hover:no-underline hover:cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

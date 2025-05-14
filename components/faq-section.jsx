"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can you start?',
    answer: 'We can usually start within 24-48 hours after confirming your request.',
  },
  {
    question: "What if I don't like designs?",
    answer: 'We offer unlimited revisions until you’re satisfied with the result.',
  },
  {
    question: 'Why not hire a designers?',
    answer: 'Hiring full-time designers can be expensive and time-consuming. We’re flexible, fast, and cost-effective.',
  },
  {
    question: 'How much design work will I get?',
    answer: 'You’ll get a consistent stream of high-quality designs depending on the plan you choose.',
  },
  {
    question: 'What software is used?',
    answer: 'We mainly use Figma, Adobe Suite, and other industry-standard tools.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center relative z-50 top-[150rem] md:top-[190rem] lg:top-[175rem]">
        <h2 className="text-3xl font-bold text-gray-900">Still have questions?</h2>
        <p className="mt-2 text-gray-600">
          Find quick answers to commonly asked questions about Designor. Have a question not listed?
        </p>
      </div>

      <div className="mt-12 max-w-xl mx-auto space-y-4 relative z-50 top-[150rem] md:top-[190rem] lg:top-[175rem]">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left font-medium text-gray-900 focus:outline-none"
              onClick={() => toggle(i)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

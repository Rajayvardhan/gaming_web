import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is it safe to play with real money on Finunique GameZone?",
    answer: "Yes, absolutely! We use industry-standard encryption and security measures to protect your data and transactions. Our platform is RNG certified and regularly audited for fairness."
  },
  {
    question: "How do I start playing games?",
    answer: "Simply create an account, verify your details, add money to your wallet, and you're ready to start playing! We recommend starting with practice games to familiarize yourself with the platform."
  },
  {
    question: "What are the withdrawal options?",
    answer: "We support multiple withdrawal methods including direct bank transfer, UPI, and popular e-wallets. Withdrawals are processed within 24-48 hours after KYC verification."
  },
  {
    question: "Is online rummy legal in India?",
    answer: "Yes, rummy is recognized as a game of skill by the Supreme Court of India and is legal to play online for cash prizes in most Indian states."
  },
  {
    question: "What if I face technical issues while playing?",
    answer: "Our 24/7 customer support team is always available to help. You can reach us through live chat, email, or phone support for immediate assistance."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className=" bg-secondary" />
                ) : (
                  <ChevronDown className=" bg-secondary" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
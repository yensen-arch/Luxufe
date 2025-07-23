"use client";
import React, { useState } from "react";

interface PaymentsAccordionProps {
  data?: {
    items: Array<{
      title: string;
      content: string;
    }>;
  };
}

const defaultItems = [
  {
    title: "Is my payment secure?",
    content:
      "Absolutely. All transactions are encrypted and processed through trusted, PCI-compliant payment gateways. Your financial information is never stored on our servers.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, bank transfers, and select digital wallets. If you have a preferred payment method, please contact our team for assistance.",
  },
  {
    title: "Will I receive a payment confirmation?",
    content:
      "Yes, you will receive an instant confirmation email with your payment details and booking summary as soon as your payment is processed.",
  },
  {
    title: "Can I pay in installments?",
    content:
      "We offer flexible payment options for select journeys. Please reach out to your Luxufe travel advisor to discuss installment plans.",
  },
  {
    title: "What if I need to change or cancel my booking?",
    content:
      "Our team is here to help. Please contact us as soon as possible to discuss changes or cancellations. Refunds and changes are subject to our terms and conditions.",
  },
  {
    title: "Who do I contact for payment support?",
    content:
      "Our dedicated support team is available 24/7. You can reach us via the contact details provided on this page or reply to your payment confirmation email.",
  },
];

export default function PaymentsAccordion({ data }: PaymentsAccordionProps) {
  // Fallback data if no Sanity data is provided
  const accordionData = data || {
    items: defaultItems,
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto my-24">
      <div className="divide-y divide-gray-600 border-t border-b border-gray-600">
        {accordionData.items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            {/* Toggle button */}
            <button
              className="w-full flex justify-between items-center py-8 px-4 md:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-2xl md:text-3xl font-arpona font-bold text-[#23263a] text-left">
                {item.title}
              </span>
              {/* Icon */}
              <span className="ml-4 text-gray-500 group-hover:text-gray-800">
                {openIndex === idx ? (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="8" y1="8" x2="24" y2="24" />
                    <line x1="24" y1="8" x2="8" y2="24" />
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="16" y1="8" x2="16" y2="24" />
                    <line x1="8" y1="16" x2="24" y2="16" />
                  </svg>
                )}
              </span>
            </button>

            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-8 px-4 md:px-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <p className="font-inter text-slate-700 text-md md:text-lg font-bold max-w-4xl">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
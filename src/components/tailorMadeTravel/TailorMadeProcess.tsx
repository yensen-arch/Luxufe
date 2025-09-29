"use client"
import React, { useState } from "react";

const defaultSteps = [
  {
    title: "DISCOVER",
    description:
      "Share your ideas, inspirations, and intentions with us. Whether it's a specific destination or just a feeling you're chasing, we begin by listening.",
    imageUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "DESIGN",
    description:
      "Our team builds a bespoke itinerary based on your preferences, complete with trusted partners, insider access, and seamless logistics. You'll have time to review and refine.",
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "CONFIRM",
    description:
      "Once you're happy, we finalize the journey. You'll receive all confirmations, documents, and support materials with every detail so you're ready to go.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "TRAVEL",
    description:
      "Relax and enjoy. With everything arranged and our team available for anything you need, your journey unfolds exactly as it should: effortlessly.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

interface TailorMadeProcessProps {
  data?: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
      image: {
        asset: {
          url: string;
          metadata: {
            dimensions: {
              width: number;
              height: number;
            };
          };
        };
        alt: string | null;
      };
    }>;
    appointmentButtonText: string;
    wizardButtonText: string;
  };
}

export default function TailorMadeProcess({ data }: TailorMadeProcessProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "The Tailor-made Process";
  const displayDescription = data?.description || "Thoughtful planning, perfectly paced; here's how we bring your journey to life";
  const displayAppointmentButtonText = data?.appointmentButtonText || "BOOK AN APPOINTMENT";
  const displayWizardButtonText = data?.wizardButtonText || "TRY THE TRIP WIZARD";
  
  // Use CMS steps if available, otherwise use default steps
  const steps = data?.steps?.map(step => ({
    title: step.title,
    description: step.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: step.image?.asset?.url || "/placeholder.svg",
  })) || defaultSteps;


  return (
    <section className="w-full bg-[#23263a] py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-arpona text-white mb-4">{displayTitle}</h2>
        <p className="text-md text-white/80 font-inter font-bold my-10 md:max-w-2/7 mx-auto">
          {displayDescription}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-0 mb-16 relative">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center flex-1 px-4">
              <div className="w-[250px] h-[250px] mb-6 relative">
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-none shadow-lg"
                />
                {/* Dotted line except for last step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-[calc(100%+80px)] h-0.5">
                    <svg width="150%" height="8" className="absolute left-full top-1/2 -translate-y-1/2" style={{ minWidth: 80 }}>
                      <line x1="0" y1="4" x2="70" y2="4" stroke="#E5E7EB" strokeDasharray="4,6" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-white text-sm font-inter font-bold tracking-widest mb-3">{step.title}</h3>
              <p className="text-white/80 text-sm font-inter font-bold max-w-xs mb-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          <button className="border-2 border-gray-400 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-[#23263a] transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest">
            {displayAppointmentButtonText} <span className="ml-2">→</span>
          </button>
          <button className="border-2 border-gray-400 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-[#23263a] transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest">
            {displayWizardButtonText} <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
} 
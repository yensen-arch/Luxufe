"use client";
import { useState } from "react";
import ContactUs from "@/components/landing/ContactUs";
import CuratedForYou from "@/components/landing/CuratedForYou";
import DiscoverLuxury from "@/components/landing/DiscoverLuxury";
import ElevePerks from "@/components/landing/ElevePerks";
import ExclusiveOffers from "@/components/landing/ExclusiveOffers";
import Footer from "@/components/common/Footer";
import Hero from "@/components/landing/Hero";
import Inspiration from "@/components/landing/Inspiration";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import Navbar from "@/components/common/Navbar";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import StartJourney from "@/components/landing/StartJourney";
import Testimonials from "@/components/landing/Testimonials";
import Voyages from "@/components/landing/Voyages";
import OfferModal from "@/components/common/OfferModal";
import { getLandingPageData } from "@/lib/sanity";

export default function Home() {
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero data={undefined} />
      
      {/* Test Button for Offer Modal */}
      <div className="fixed top-20 right-4 z-30">
        <button
          onClick={() => setIsOfferModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Test Offer Modal
        </button>
      </div>
      
      <StartJourney data={undefined} />
      <DiscoverLuxury data={undefined} />
      <CuratedForYou data={undefined} />
      <Voyages data={undefined} />
      <Testimonials data={undefined} />
      <LuxuryPartners data={undefined} />
      <ElevePerks data={undefined} />
      <ExclusiveOffers data={undefined} />
      <Inspiration data={undefined} />
      <NewsletterSignUp data={undefined} />
      <ContactUs data={undefined} />
      <Footer />
      
      {/* Offer Modal */}
      <OfferModal 
        isOpen={isOfferModalOpen}
        onClose={() => setIsOfferModalOpen(false)}
      />
    </main>
  );
}

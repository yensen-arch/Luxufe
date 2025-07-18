'use client';
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/tailorMadeTravel/Hero";
import WhatTailorMadeMeans from "@/components/tailorMadeTravel/WhatTailorMadeMeans";
import TailorMadeItineraries from "@/components/tailorMadeTravel/TailorMadeItineraries";
import ExploreTogetherHero from "@/components/tailorMadeTravel/ExploreTogetherHero";
import AssistWithMore from "@/components/tailorMadeTravel/AssistWithMore";
import TailorMadeProcess from "@/components/tailorMadeTravel/TailorMadeProcess";
import WorldwideMap from "@/components/tailorMadeTravel/WorldwideMap";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import Footer from "@/components/common/Footer";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import Testimonials from "@/components/landing/Testimonials";
import { getTailorMadeTravelPageData, type TailorMadeTravelPageData } from '@/lib/sanity';

const Page = () => {
  const [pageData, setPageData] = useState<TailorMadeTravelPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTailorMadeTravelPageData();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching tailor made travel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-900">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Hero data={pageData?.hero} />
      <WhatTailorMadeMeans data={pageData?.whatTailorMadeMeans} />
      <WorldwideMap />
      <TailorMadeItineraries data={pageData?.tailorMadeItineraries} />
      <ExploreTogetherHero data={pageData?.exploreTogetherHero} />
      <AssistWithMore data={pageData?.assistWithMore} />
      <TailorMadeProcess data={pageData?.tailorMadeProcess} />
      <Testimonials />
      <LuxuryPartners />
      <NewsletterSignUp />
      <Footer />
    </main>
  );
};

export default Page;
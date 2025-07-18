'use client';
import React, { useEffect, useState } from 'react';
import HeroStories from '@/components/storiesAndInsights/HeroStories';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import NewsletterSignUp from '@/components/landing/NewsletterSignUp';
import ContactUs from '@/components/landing/ContactUs';
import ExploreMore from '@/components/eleve/ExploreMore';
import ElevePerks from '@/components/landing/ElevePerks';
import BlogMasonryGrid from '@/components/storiesAndInsights/BlogMasonryGrid';
import TravelChoice from '@/components/storiesAndInsights/TravelChoice';
import EffortlessLuxury from '@/components/storiesAndInsights/EffortlessLuxury';
import { getStoriesAndInsightsPageData, getLandingPageData, getElevePageData, type StoriesAndInsightsPageData, type LandingPageData, type ElevePageData } from '@/lib/sanity';

export default function StoriesAndInsights() {
  const [storiesData, setStoriesData] = useState<StoriesAndInsightsPageData | null>(null);
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [eleveData, setEleveData] = useState<ElevePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storiesPageData, landingPageData, elevePageData] = await Promise.all([
          getStoriesAndInsightsPageData(),
          getLandingPageData(),
          getElevePageData()
        ]);
        
        setStoriesData(storiesPageData);
        setLandingData(landingPageData);
        setEleveData(elevePageData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <HeroStories data={storiesData?.hero} />
      <BlogMasonryGrid />
      <TravelChoice data={storiesData?.travelChoice} />
      <EffortlessLuxury data={storiesData?.effortlessLuxury} />
      <ElevePerks data={landingData?.elevePerks} />
      <ExploreMore data={eleveData?.exploreMore} />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUs data={landingData?.contactUs} />
      <Footer />
    </main>
  );
}
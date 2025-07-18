'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/common/Navbar';
import ExperienceMoreHero from '@/components/experienceMore/ExperienceMoreHero';
import LatestGreatestFilter from '@/components/experienceMore/LatestGreatestFilter';
import LatestGreatestGrid from '@/components/experienceMore/LatestGreatestGrid';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/common/Footer';
import ElevePerks from '@/components/landing/ElevePerks';
import EffortlessLuxury from '@/components/blogs/EffortlessLuxury';
import NewsletterSignUp from '@/components/landing/NewsletterSignUp';
import { getExperienceMorePageData, getLandingPageData, type ExperienceMorePageData, type LandingPageData } from '@/lib/sanity';

export default function ExperienceMore() {
  const [experienceData, setExperienceData] = useState<ExperienceMorePageData | null>(null);
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [experiencePageData, landingPageData] = await Promise.all([
          getExperienceMorePageData(),
          getLandingPageData()
        ]);
        
        setExperienceData(experiencePageData);
        setLandingData(landingPageData);
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
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
            <p className="mt-4 text-white">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <ExperienceMoreHero data={experienceData?.hero} />
      <LatestGreatestFilter data={experienceData?.latestGreatestFilter} />
      <LatestGreatestGrid />
      <ElevePerks data={landingData?.elevePerks} />
      <EffortlessLuxury />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUs data={landingData?.contactUs} />
      <Footer />
    </div>
  );
}
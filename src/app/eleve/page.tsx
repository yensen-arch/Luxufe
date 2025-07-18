"use client"
import React, { useState, useEffect } from 'react';
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import NewsletterSignUp from "@/components/landing/NewsletterSignUp"
import HeroEleve from '@/components/eleve/HeroEleve';
import EleveIntro from '@/components/eleve/EleveIntro';
import WhyJoinEleve from '@/components/eleve/WhyJoinEleve';
import DiscoverLuxuryEleve from '@/components/eleve/DiscoverLuxuryEleve';
import SpeakingJourneys from '@/components/eleve/SpeakingJourneys';
import ElevateTravel from '@/components/eleve/ElevateTravel';
import ExploreMore from '@/components/eleve/ExploreMore';
import BecomeMemberModal from '@/components/eleve/BecomeMemberModal';
import { getElevePageData, getLandingPageData, type ElevePageData, type LandingPageData } from '@/lib/sanity';

const Eleve = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [eleveData, setEleveData] = useState<ElevePageData | null>(null);
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [elevePageData, landingPageData] = await Promise.all([
          getElevePageData(),
          getLandingPageData()
        ]);
        
        setEleveData(elevePageData);
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
      <HeroEleve 
        onBecomeMember={() => setModalOpen(true)} 
        data={eleveData?.hero}
      />
      <EleveIntro data={eleveData?.eleveIntro} />
      <WhyJoinEleve 
        onBecomeMember={() => setModalOpen(true)} 
        data={eleveData?.whyJoinEleve}
      />
      <DiscoverLuxuryEleve data={eleveData?.discoverLuxuryEleve} />
      <SpeakingJourneys data={eleveData?.speakingJourneys} />
      <ElevateTravel data={eleveData?.elevateTravel} />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ExploreMore data={eleveData?.exploreMore} />
      <Footer />
      <BecomeMemberModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        data={eleveData?.becomeMemberModal}
      />
    </main>
  )
}

export default Eleve
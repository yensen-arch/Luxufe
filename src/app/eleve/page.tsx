import React from 'react';
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
import { getElevePageData, getLandingPageData } from '@/lib/sanity';

const Eleve = async () => {
  try {
    const [elevePageData, landingPageData] = await Promise.all([
      getElevePageData(),
      getLandingPageData()
    ]);

    return (
      <main>
        <Navbar />
        <HeroEleve data={elevePageData?.hero} />
        <EleveIntro data={elevePageData?.eleveIntro} />
        <WhyJoinEleve data={elevePageData?.whyJoinEleve} />
        <DiscoverLuxuryEleve data={elevePageData?.discoverLuxuryEleve} />
        <SpeakingJourneys data={elevePageData?.speakingJourneys} />
        <ElevateTravel data={elevePageData?.elevateTravel} />
        <NewsletterSignUp data={landingPageData?.newsletter} />
        <ExploreMore data={elevePageData?.exploreMore} />
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    // Fallback to dummy data if Sanity fails
    return (
      <main>
        <Navbar />
        <HeroEleve />
        <EleveIntro />
        <WhyJoinEleve />
        <DiscoverLuxuryEleve />
        <SpeakingJourneys />
        <ElevateTravel />
        <NewsletterSignUp />
        <ExploreMore />
        <Footer />
      </main>
    );
  }
}

export default Eleve
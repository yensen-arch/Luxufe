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

const Eleve = () => {
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
  )
}

export default Eleve
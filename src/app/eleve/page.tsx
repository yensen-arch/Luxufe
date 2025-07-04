"use client"
import React, { useState } from 'react';
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

const Eleve = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <HeroEleve onBecomeMember={() => setModalOpen(true)} />
      <EleveIntro />
      <WhyJoinEleve onBecomeMember={() => setModalOpen(true)} />
      <DiscoverLuxuryEleve />
      <SpeakingJourneys />
      <ElevateTravel />
      <NewsletterSignUp />
      <ExploreMore />
      <Footer />
      <BecomeMemberModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}

export default Eleve
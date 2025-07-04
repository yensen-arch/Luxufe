import React from 'react';
import HeroStories from '@/components/storiesAndInsights/HeroStories';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import NewsletterSignUp from '@/components/landing/NewsletterSignUp';
import ContactUs from '@/components/landing/ContactUs';
import ExploreMore from '@/components/eleve/ExploreMore';
import ElevePerks from '@/components/landing/ElevePerks';

export default function StoriesAndInsights() {
  return (
    <main>
      <Navbar />
      <HeroStories />
      <ElevePerks />
      <ExploreMore />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </main>
  );
}
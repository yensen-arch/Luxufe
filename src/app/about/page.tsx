import React from 'react'
import AboutHero from "@/components/aboutUs/AboutHero";
import Navbar from "@/components/common/Navbar";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUs from "@/components/aboutUs/ContactUsAbout";
import Footer from "@/components/common/Footer";
import GuidingValues from "@/components/aboutUs/GuidingValues";
import Wallpaper from "@/components/aboutUs/Wallpaper";
import LuxuryStay from "@/components/aboutUs/LuxuryStay";
import ArtOfEffortlessTravel from "@/components/aboutUs/ArtOfEffortlessTravel";
import RecognizedForExcellence from "@/components/aboutUs/RecognizedForExcellence";
import LuxufeStory from "@/components/beforeYouTravel/LuxufeStory";
import SpeakingJourneys from "@/components/aboutUs/SpeakingJourneys";
import { getAboutPageData, getLandingPageData } from '@/lib/sanity';

export default async function About() {
  const aboutData = await getAboutPageData();
  const landingData = await getLandingPageData();

  return (
    <main>
      <Navbar />
      <AboutHero data={aboutData?.hero} />
      <ArtOfEffortlessTravel data={aboutData?.artOfEffortlessTravel} />
      <Wallpaper data={aboutData?.wallpaper} />
      <LuxuryStay data={aboutData?.luxuryStay} />
      <GuidingValues data={aboutData?.guidingValues} />
      <LuxufeStory data={aboutData?.luxufeStory} />
      <RecognizedForExcellence data={aboutData?.recognizedForExcellence} />
      <SpeakingJourneys data={aboutData?.speakingJourneys} />
      <LuxuryPartners data={landingData?.luxuryPartners} />
      <ElevePerks data={landingData?.elevePerks} />
      <ContactUs data={aboutData?.contactUs} />
      <Footer />
    </main>
  );
}
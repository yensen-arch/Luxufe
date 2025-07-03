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
import LuxufeStory from "@/components/beforeYouTravel/LuxufeStory";

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <ArtOfEffortlessTravel />
      <LuxuryStay />
      <Wallpaper />
      <GuidingValues />
      <LuxufeStory />
      <LuxuryPartners />
      <ElevePerks />
      <ContactUs />
      <Footer />
    </main>
  );
}
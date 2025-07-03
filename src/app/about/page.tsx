import React from 'react'
import AboutHero from "@/components/aboutUs/AboutHero";
import Navbar from "@/components/common/Navbar";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/common/Footer";
import GuidingValues from "@/components/aboutUs/GuidingValues";
import Wallpaper from "@/components/aboutUs/Wallpaper";
import LuxuryStay from "@/components/aboutUs/LuxuryStay";

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <LuxuryStay />
      <Wallpaper />
      <GuidingValues />
      <LuxuryPartners />
      <ElevePerks />
      <ContactUs />
      <Footer />
    </main>
  );
}
import React from 'react'
import AboutHero from "@/components/aboutUs/AboutHero";
import Navbar from "@/components/common/Navbar";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/common/Footer";
import GuidingValues from "@/components/aboutUs/GuidingValues";

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <GuidingValues />
      <LuxuryPartners />
      <ElevePerks />
      <ContactUs />
      <Footer />
    </main>
  );
}
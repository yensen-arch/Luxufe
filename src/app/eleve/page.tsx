import React from 'react';
import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import NewsletterSignUp from "@/components/landing/NewsletterSignUp"
import HeroEleve from '@/components/eleve/HeroEleve';

const Eleve = () => {
  return (
    <main>
      <Navbar />
      <HeroEleve />
      <NewsletterSignUp />
      <Footer />
    </main>
  )
}

export default Eleve
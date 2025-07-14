import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import ExploreMore from "@/components/eleve/ExploreMore";
import NotFoundHero from "@/components/common/NotFoundHero";

export default function Page() {
  return (
    <main>
      <Navbar />
      <NotFoundHero />
      <ExploreMore />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};
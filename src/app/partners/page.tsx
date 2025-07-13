import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import HeroPartners from "@/components/partners/HeroPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import SelectedFavs from "@/components/partners/SelectedFavs";
import PartnerHighlight from "@/components/partners/PartnerHighlight";
import BenefitsSection from "@/components/partners/BenefitsSection";

const Page = () => {
  return (
    <main>
      <Navbar />
      <HeroPartners />
      <BenefitsSection />
      <PartnerHighlight />
      <SelectedFavs />
      <ElevePerks />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
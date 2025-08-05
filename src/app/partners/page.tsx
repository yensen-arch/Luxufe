import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import HeroPartners from "@/components/partners/HeroPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import SelectedFavs from "@/components/partners/SelectedFavs";
import PartnerHighlight from "@/components/partners/PartnerHighlight";
import BenefitsSection from "@/components/partners/BenefitsSection";
import GlobalNetwork from "@/components/partners/GlobalNetwork";
import SilverseaCruiseSearch from "@/components/partners/HighestBrandSearch";

const Page = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <HeroPartners />
      <GlobalNetwork />
      <BenefitsSection />
      <PartnerHighlight />
      <SilverseaCruiseSearch />
      <SelectedFavs />
      <ElevePerks />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
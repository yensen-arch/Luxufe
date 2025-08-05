import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/partners/ContactUs";
import HeroPartners from "@/components/partners/HeroPartners";
import ElevePerks from "@/components/landing/ElevePerks";
import SelectedFavs from "@/components/partners/SelectedFavs";
import PartnerHighlight from "@/components/partners/PartnerHighlight";
import BenefitsSection from "@/components/partners/BenefitsSection";
import GlobalNetwork from "@/components/partners/GlobalNetwork";
import HighestBrandSearch from "@/components/partners/HighestBrandSearch";
import { getPartnersPageData } from "@/lib/sanity/partnersPage";
import { getLandingPageData } from "@/lib/sanity";

const Page = async () => {
  // Fetch partners page data from Sanity
  const partnersData = await getPartnersPageData();
  
  // Fetch landing page data for ElevePerks (since it's already set up)
  const landingData = await getLandingPageData();

  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <HeroPartners />
      <GlobalNetwork />
      <BenefitsSection />
      <PartnerHighlight />
      <HighestBrandSearch data={partnersData?.highestBrandSearch} />
      <SelectedFavs data={partnersData?.selectedFavs} />
      <ElevePerks data={landingData?.elevePerks} />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
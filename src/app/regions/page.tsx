import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import MapRegions from "@/components/regions/MapRegions";
import HeroRegions from "@/components/regions/HeroRegions";
import ContactUs from "@/components/regions/ContactUs";
import ExploreAfrica from "@/components/regions/ExploreAfrica";
import LuxuryBuilt from "@/components/regions/LuxuryBuilt";
import CountriesGrid from "@/components/regions/CountriesGrid";
import WaysToExplore from "@/components/regions/WaysToExplore";
const Page = () => {
  return (
    <main>
      <Navbar />
      <HeroRegions />
      <MapRegions />
      <CountriesGrid />
      <WaysToExplore />
      <LuxuryBuilt />
      <ExploreAfrica />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
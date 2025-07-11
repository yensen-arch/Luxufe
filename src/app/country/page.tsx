import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import CountryHero from "@/components/country/CountryHero";
import RecommendedJourneys from "@/components/country/RecommendedJourneys";
import SetSail from "@/components/country/SetSail";
import ExploreCountry from "@/components/country/ExploreCountry";
import RecommendedStays from "@/components/country/RecommendedStays";
import GoodToKnow from "@/components/country/GoodToKnow";

const Page = () => {
  return (
    <main>
      <Navbar />
      <CountryHero />
      <ExploreCountry />
      <RecommendedJourneys />
      <SetSail />
      <RecommendedStays />
      <GoodToKnow />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
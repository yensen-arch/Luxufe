import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import CruisesHero from "@/components/cruises/CruisesHero";
import CuratedForYou from "@/components/cruises/CuratedForYou";
import TravelTheWorld from "@/components/cruises/TravelTheWorld";
import FAQs from "@/components/cruises/FAQs";
import ExploreMore from "@/components/eleve/ExploreMore";
import CruiseWithConfidence from "@/components/cruises/CruiseWithConfidence";
import TrustedCruisePartners from "@/components/cruises/TrustedCruisePartners";
import SetSailWithLuxufe from "@/components/cruises/SetSailWithLuxufe";

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <CruisesHero />
      <div id="travel-the-world">
        <TravelTheWorld />
      </div>
      <div id="curated-for-you">
        <CuratedForYou />
      </div>
      <CruiseWithConfidence />
      <div id="trusted-cruise-partners">
        <TrustedCruisePartners />
      </div>
      <div id="set-sail-with-luxufe">
        <SetSailWithLuxufe />
      </div>
      <FAQs />
      <Testimonials/>
      <ExploreMore />
      <Footer />
    </main>
  );
};

export default Page;
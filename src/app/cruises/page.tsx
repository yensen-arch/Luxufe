import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import CruisesHero from "@/components/cruises/CruisesHero";
import CuratedForYou from "@/components/cruises/CuratedForYou";
import TravelTheWorld from "@/components/cruises/TravelTheWorld";
import FAQs from "@/components/cruises/FAQs";
import ExploreMore from "@/components/eleve/ExploreMore";

const Page = () => {
  return (
    <main>
      <Navbar />
      <CruisesHero />
      <CuratedForYou />
      <TravelTheWorld />
      <FAQs />
      <Testimonials/>
      <ExploreMore />
      <Footer />
    </main>
  );
};

export default Page;
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import CruisesHero from "@/components/cruises/CruisesHero";

const Page = () => {
  return (
    <main>
      <Navbar />
      <CruisesHero />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;
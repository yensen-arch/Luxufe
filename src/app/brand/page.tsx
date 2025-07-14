import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import BrandHero from "@/components/brand/BrandHero";
import WhyWeTravel from "@/components/brand/WhyWeTravel";
import BrandPhilosophy from "@/components/brand/BrandPhilosophy";
import BrandBenefits from "@/components/brand/BrandBenefits";
import Itineraries from "@/components/brand/Itineraries";
import AmanHotelsGrid from "@/components/offers-and-promos/AmanHotelsGrid";

const Page = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <BrandHero />
      <BrandPhilosophy />
      <WhyWeTravel />
      <BrandBenefits />
      <AmanHotelsGrid />
      <Itineraries />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
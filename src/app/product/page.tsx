import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import ProductHero from "@/components/Product/ProductHero";
import WhyWeTravel from "@/components/brand/WhyWeTravel";
import BrandBenefits from "@/components/brand/BrandBenefits";
import Itineraries from "@/components/brand/Itineraries";
import BrandMain from "@/components/brand/BrandMain";
import ProductOverview from "@/components/Product/ProductOverview";
const Page = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <ProductHero />
      <ProductOverview />
      <Itineraries />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
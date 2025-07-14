import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import ProductHero from "@/components/Product/ProductHero";
import Itineraries from "@/components/brand/Itineraries";
import ProductOverview from "@/components/Product/ProductOverview";
import ProductGrid from "@/components/Product/Grid";
import MapProduct from "@/components/Product/MapProduct";
const Page = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <ProductHero />
      <ProductOverview />
      <ProductGrid />
      <MapProduct />
      <Itineraries />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import SelectedFavs from "@/components/partners/SelectedFavs";
import Testimonials from "@/components/landing/Testimonials";
import BrandHero from "@/components/brand/BrandHero";
import WhyWeTravel from "@/components/brand/WhyWeTravel";

const Page = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <BrandHero />
      <WhyWeTravel />
      <SelectedFavs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
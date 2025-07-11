import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import CountryHero from "@/components/country/CountryHero";
const Page = () => {
  return (
    <main>
      <Navbar />
      <CountryHero />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
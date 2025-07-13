import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;
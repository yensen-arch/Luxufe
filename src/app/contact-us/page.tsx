import Navbar from "@/components/common/Navbar";
import ElevePerks from "@/components/landing/ElevePerks";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import StoriesAndInsights from "../stories-and-insights/page";
import ContactUs from "@/components/landing/ContactUs";

const Page = () => {
  return (
    <main>
      <Navbar />
      <ElevePerks />
      <Testimonials />
      <StoriesAndInsights />
      <NewsletterSignUp/>
      <ContactUs/>
      <Footer />
    </main>
  );
};

export default Page;
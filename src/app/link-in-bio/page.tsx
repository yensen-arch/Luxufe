import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Inspiration from "@/components/landing/Inspiration";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Hero from "@/components/link-in-bio/Hero";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Inspiration/>
      <NewsletterSignUp/>
      <ContactUsJourneys/>
      <Footer />
    </main>
  );
};

export default Page;
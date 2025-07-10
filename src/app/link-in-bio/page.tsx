import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Inspiration from "@/components/landing/Inspiration";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Inspiration/>
      <NewsletterSignUp/>
      <ContactUsJourneys/>
      <Footer />
    </main>
  );
};

export default Page;
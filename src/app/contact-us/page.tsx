import Navbar from "@/components/common/Navbar";
import ContactHero from "@/components/contact-us/ContactHero";
import ElevePerks from "@/components/landing/ElevePerks";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import Inspiration from "@/components/landing/Inspiration";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Carousel from "@/components/contact-us/Carousel";
import TravelInsuranceInfo from "@/components/contact-us/TravelInsuranceInfo";
import { getContactUsPageData } from "@/lib/sanity";

const Page = async () => {
  // Fetch data from Sanity CMS
  const pageData = await getContactUsPageData();

  return (
    <main>
      <Navbar />
      <ContactHero data={pageData?.contactHero} />
      <Carousel data={pageData?.carousel} />
      <ElevePerks />
      <TravelInsuranceInfo data={pageData?.travelInsuranceInfo} />
      <Testimonials />
      <Inspiration/>
      <NewsletterSignUp/>
      <ContactUsJourneys/>
      <Footer />
    </main>
  );
};

export default Page;
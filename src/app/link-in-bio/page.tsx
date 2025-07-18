import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Inspiration from "@/components/landing/Inspiration";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Hero from "@/components/link-in-bio/Hero";
import { getLinkInBioPageData, getLandingPageData } from "@/lib/sanity";

const Page = async () => {
  // Fetch data from Sanity CMS for both link-in-bio page and landing page
  const [pageData, landingData] = await Promise.all([
    getLinkInBioPageData(),
    getLandingPageData()
  ]);

  return (
    <main>
      <Navbar />
      <Hero data={pageData?.hero} />
      <Inspiration data={landingData?.inspiration} />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};

export default Page;
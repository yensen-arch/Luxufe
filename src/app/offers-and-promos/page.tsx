import Navbar from "@/components/common/Navbar";
import ExperienceMoreHero from "@/components/experienceMore/ExperienceMoreHero";
import Footer from "@/components/common/Footer";
import ElevePerks from "@/components/landing/ElevePerks";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import EffortlessLuxury from "@/components/blogs/EffortlessLuxury";
import OffersAndPromosMain from "@/components/offers-and-promos/OffersAndPromosMain";

const Page = () => {
  return (
    <main>
      <Navbar />
      <ExperienceMoreHero />
      <OffersAndPromosMain />
      <ElevePerks />
      <EffortlessLuxury />
      <NewsletterSignUp/>
      <Footer />
    </main>
  );
};

export default Page;
import Navbar from '@/components/common/Navbar';
import ExperienceMoreHero from '@/components/experienceMore/ExperienceMoreHero';
import LatestGreatestFilter from '@/components/experienceMore/LatestGreatestFilter';
import LatestGreatestGrid from '@/components/experienceMore/LatestGreatestGrid';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/common/Footer';
import ElevePerks from '@/components/landing/ElevePerks';
import EffortlessLuxury from '@/components/blogs/EffortlessLuxury';
import NewsletterSignUp from '@/components/landing/NewsletterSignUp';

export default function ExperienceMore() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <ExperienceMoreHero />
      <LatestGreatestFilter />
      <LatestGreatestGrid />
      <ElevePerks />
      <EffortlessLuxury />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </div>
  );
}
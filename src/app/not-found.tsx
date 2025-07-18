import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import ExploreMore from "@/components/eleve/ExploreMore";
import NotFoundHero from "@/components/common/NotFoundHero";
import { getNotFoundPageData, getElevePageData } from "@/lib/sanity";

export default async function Page() {
  // Fetch data from Sanity CMS for both not-found page and eleve page
  const [pageData, eleveData] = await Promise.all([
    getNotFoundPageData(),
    getElevePageData()
  ]);

  return (
    <main>
      <Navbar />
      <NotFoundHero data={pageData?.hero} />
      <ExploreMore data={eleveData?.exploreMore} />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};
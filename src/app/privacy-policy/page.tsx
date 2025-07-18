import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import PrivacyPolicyHero from "@/components/common/PrivacyPolicyHero";
import ExploreMore from "@/components/eleve/ExploreMore";
import { getPrivacyPolicyPageData, getElevePageData } from "@/lib/sanity";

export default async function Page() {
  // Fetch data from Sanity CMS for both privacy-policy page and eleve page
  const [pageData, eleveData] = await Promise.all([
    getPrivacyPolicyPageData(),
    getElevePageData()
  ]);

  return (
    <main>
      <Navbar />
      <PrivacyPolicyHero data={pageData?.hero} contentData={pageData?.content} />
      <ExploreMore data={eleveData?.exploreMore} />
      <Footer />
    </main>
  );
}
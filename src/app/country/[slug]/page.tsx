import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import CountryHero from "@/components/country/CountryHero";
import RecommendedJourneys from "@/components/country/RecommendedJourneys";
import SetSail from "@/components/country/SetSail";
import ExploreCountry from "@/components/country/ExploreCountry";
import RecommendedStays from "@/components/country/RecommendedStays";
import GoodToKnow from "@/components/country/GoodToKnow";
import { getHotelsByCountry, getCountryStatistics } from "@/lib/database";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  if (!slug) {
    notFound();
  }

  // Decode the slug to get the country name
  const countryName = decodeURIComponent(slug);
  
  // Fetch country-specific data
  const [hotels, countryStats] = await Promise.all([
    getHotelsByCountry(countryName),
    getCountryStatistics(countryName)
  ]);

  // If no data found for this country, show 404
  if (!countryStats || hotels.length === 0) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <CountryHero 
        countryName={countryName}
        countryStats={countryStats}
      />
      <ExploreCountry 
        countryName={countryName}
        hotels={hotels}
      />
      <RecommendedJourneys />
      <SetSail />
      <RecommendedStays 
        hotels={hotels}
      />
      <GoodToKnow />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;

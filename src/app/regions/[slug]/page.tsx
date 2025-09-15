import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import MapRegions from "@/components/regions/MapRegions";
import HeroRegions from "@/components/regions/HeroRegions";
import ContactUs from "@/components/regions/ContactUs";
import ExploreAfrica from "@/components/regions/ExploreAfrica";
import LuxuryBuilt from "@/components/regions/LuxuryBuilt";
import CountriesGrid from "@/components/regions/CountriesGrid";
import WaysToExplore from "@/components/regions/WaysToExplore";
import { getContinentStatistics, getCountriesByContinent } from "@/lib/database";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Valid continent slugs
const CONTINENT_SLUGS = [
  "africa",
  "asia", 
  "europe",
  "north-america",
  "south-america",
  "australia",
  "antarctica"
];

const CONTINENT_MAPPING: { [key: string]: string } = {
  "africa": "Africa",
  "asia": "Asia", 
  "europe": "Europe",
  "north-america": "North America",
  "south-america": "South America",
  "australia": "Australia",
  "antarctica": "Antarctica"
};

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Validate slug
  if (!slug || !CONTINENT_SLUGS.includes(slug)) {
    notFound();
  }

  const continentName = CONTINENT_MAPPING[slug];
  
  // Fetch continent statistics and countries
  const [continentStats, countriesData] = await Promise.all([
    getContinentStatistics(),
    getCountriesByContinent(continentName)
  ]);
  const continentData = continentStats[continentName];

  return (
    <main>
      <Navbar />
      <HeroRegions 
        continentName={continentName}
        continentData={continentData}
      />
      <MapRegions 
        continentName={continentName}
        continentData={continentData}
      />
      <CountriesGrid 
        continentName={continentName}
        countriesData={countriesData}
      />
      <WaysToExplore />
      <LuxuryBuilt />
      <ExploreAfrica />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Page;

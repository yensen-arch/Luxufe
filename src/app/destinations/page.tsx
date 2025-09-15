import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DestinationsHero from "@/components/destinations/DestinationsHero";
import MapDestinations from "@/components/destinations/MapDestinations";
import Masonry from "@/components/destinations/Masonry";
import ExploreMore from "@/components/eleve/ExploreMore";
import WaysToTravelFindJourney from "@/components/waysToTravel/WaysToTravelFindJourney";
import PlanningYourTrip from "@/components/destinations/PlanningYourTrip";
import { getHotelCountsByContinent, getContinentStatistics } from "@/lib/database";

const Page = async () => {
  // Fetch continent data
  const [hotelCounts, continentStats] = await Promise.all([
    getHotelCountsByContinent(),
    getContinentStatistics()
  ]);

  return (
    <main>
      <Navbar />
      <DestinationsHero />
      <MapDestinations hotelCounts={hotelCounts} />
      <Masonry continentStats={continentStats} />
      <PlanningYourTrip />
      <WaysToTravelFindJourney />
      <ExploreMore />
      <Footer />
    </main>
  );
};

export default Page;
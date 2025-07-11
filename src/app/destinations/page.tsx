import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DestinationsHero from "@/components/destinations/DestinationsHero";
import MapDestinations from "@/components/destinations/MapDestinations";
import Masonry from "@/components/destinations/Masonry";
import ExploreMore from "@/components/eleve/ExploreMore";
import WaysToTravelFindJourney from "@/components/waysToTravel/WaysToTravelFindJourney";

const Page = () => {
  return (
    <main>
      <Navbar />
      <DestinationsHero />
      <MapDestinations />
      <Masonry />
      <WaysToTravelFindJourney />
      <ExploreMore />
      <Footer />
    </main>
  );
};

export default Page;
import CuratedForYou from "@/components/CuratedForYou";
import DiscoverLuxury from "@/components/DiscoverLuxury";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartJourney from "@/components/StartJourney";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StartJourney />
      <DiscoverLuxury />
      <CuratedForYou />
    </main>
  );
}

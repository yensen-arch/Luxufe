import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import PrivacyPolicyHero from "@/components/common/PrivacyPolicyHero";
import ExploreMore from "@/components/eleve/ExploreMore";

export default function Page() {
  return (
    <main>
      <Navbar />
      <PrivacyPolicyHero />
      <ExploreMore />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import LoginHero from "@/components/members/LoginHero";
import { getMembersLoginPageData, getLandingPageData } from "@/lib/sanity";

const LoginPage = async () => {
  const [loginData, landingData] = await Promise.all([
    getMembersLoginPageData(),
    getLandingPageData(),
  ]);
  return (
    <main>
      <Navbar />
      <LoginHero data={loginData?.hero} />
      <Testimonials data={landingData?.testimonials} />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};

export default LoginPage;
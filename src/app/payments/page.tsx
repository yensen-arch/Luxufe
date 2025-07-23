import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PaymentsHero from "@/components/payments/PaymentsHero";
import ContactUs from "@/components/regions/ContactUs";
import PaymentsDisplay from "@/components/payments/PaymentsDisplay";
import { getPaymentsPageData } from "@/lib/sanity";

const PaymentsPage = async () => {
  const paymentsData = await getPaymentsPageData();
  return (
    <main>
      <Navbar />
      <PaymentsHero data={paymentsData?.hero} />
      <PaymentsDisplay />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default PaymentsPage;
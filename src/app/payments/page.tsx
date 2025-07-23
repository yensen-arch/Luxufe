import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PaymentsHero from "@/components/payments/PaymentsHero";
import ContactUs from "@/components/regions/ContactUs";
import { getPaymentsPageData } from "@/lib/sanity";

const PaymentsPage = async () => {
  const paymentsData = await getPaymentsPageData();
  return (
    <main>
      <Navbar />
      <PaymentsHero data={paymentsData?.hero} />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default PaymentsPage;
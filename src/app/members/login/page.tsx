import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import Testimonials from "@/components/landing/Testimonials"
import ContactUsJourneys from "@/components/landing/ContactUsJourneys"
const LoginPage = () => {
  return (
    <div>
        <Navbar />
        <Testimonials />
        <ContactUsJourneys />
        <Footer />
    </div>
  )
}

export default LoginPage
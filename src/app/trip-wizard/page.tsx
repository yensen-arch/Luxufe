import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ExploreMore from '@/components/beforeYouTravel/ExploreMore'
import NewsletterSignUp from '@/components/landing/NewsletterSignUp'
import SpeakingJourneys from '@/components/aboutUs/SpeakingJourneys'
import TripHero from '@/components/trip-wizard/TripHero'

const TripWizardPage = () => {
  return (
        <div>
            <Navbar />
            <TripHero />
            <SpeakingJourneys />
            <NewsletterSignUp />
            <ExploreMore />
            <Footer />
        </div>
  )
}

export default TripWizardPage
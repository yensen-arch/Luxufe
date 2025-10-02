import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ExploreMore from '@/components/beforeYouTravel/ExploreMore'
import NewsletterSignUp from '@/components/landing/NewsletterSignUp'
import SpeakingJourneys from '@/components/aboutUs/SpeakingJourneys'
import TripHero from '@/components/trip-wizard/TripHero'
import SeamlessWay from '@/components/trip-wizard/SeamlessWay'
import TripWizardStepper from '@/components/trip-wizard/TripWizardStepper'
import { getTripWizardPageData, getLandingPageData, getBeforeYouTravelPageData } from '@/lib/sanity'

const TripWizardPage = async () => {
  const [wizardData, landingData, beforeTravelData] = await Promise.all([
    getTripWizardPageData(),
    getLandingPageData(),
    getBeforeYouTravelPageData(),
  ]);
  return (
    <div>
      <Navbar />
      <TripHero />
      <SeamlessWay />
      <TripWizardStepper
        question={wizardData?.stepper?.question || ''}
        options={wizardData?.stepper?.options || []}
        progress={wizardData?.stepper?.progress || 0}
      />
      <SpeakingJourneys />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ExploreMore data={beforeTravelData?.exploreMore} />
      <Footer />
    </div>
  )
}

export default TripWizardPage
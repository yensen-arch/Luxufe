import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUsJourneys from '@/components/landing/ContactUsJourneys'
import NewsletterSignUp from '@/components/landing/NewsletterSignUp'
import SearchHero from '@/components/search/SearchHero'

const SearchPage = () => {
  return (
    <div>
        <Navbar />
        <SearchHero />
        <NewsletterSignUp />
        <ContactUsJourneys />
        <Footer />
    </div>
  )
}

export default SearchPage
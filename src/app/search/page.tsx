import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUsJourneys from '@/components/landing/ContactUsJourneys'
import NewsletterSignUp from '@/components/landing/NewsletterSignUp'
import SearchHero from '@/components/search/SearchHero'
import SearchMain from '@/components/search/SearchMain'

const SearchPage = () => {
  return (
    <div>
        <Navbar />
        <SearchHero />
        <SearchMain />
        <NewsletterSignUp />
        <ContactUsJourneys />
        <Footer />
    </div>
  )
}

export default SearchPage
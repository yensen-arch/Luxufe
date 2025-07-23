import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUsJourneys from '@/components/landing/ContactUsJourneys'
import NewsletterSignUp from '@/components/landing/NewsletterSignUp'
import SearchHero from '@/components/search/SearchHero'
import SearchMain from '@/components/search/SearchMain'
import { getSearchPageData, getLandingPageData } from '@/lib/sanity'

const SearchPage = async () => {
  const [searchData, landingData] = await Promise.all([
    getSearchPageData(),
    getLandingPageData(),
  ]);
  return (
    <main>
      <Navbar />
      <SearchHero data={searchData?.hero} />
      <SearchMain />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUsJourneys />
      <Footer />
    </main>
  )
}

export default SearchPage
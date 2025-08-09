import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
import ContactUs from "@/components/regions/ContactUs"
import Testimonials from "@/components/landing/Testimonials"
import BrandHero from "@/components/brand/BrandHero"
import WhyWeTravel from "@/components/brand/WhyWeTravel"
import BrandPhilosophy from "@/components/brand/BrandPhilosophy"
import BrandBenefits from "@/components/brand/BrandBenefits"
import Itineraries from "@/components/brand/Itineraries"
import BrandMain from "@/components/brand/BrandMain"
import { getBrandPageData } from '@/lib/sanity/brandPage'
import { getBrandByName } from '@/lib/database'

// Loading component
function BrandPageLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
      </div>
    </div>
  )
}

// Validate brand slug
function isValidBrandSlug(slug: string): boolean {
  const validSlugs = [
    'aman',
    'anantara', 
    'auberge-resorts',
    'banyan-tree-hotels',
    'andbeyond',
    'como-hotel-and-resorts',
    'fairmont-hotels',
    'four-seasons',
    'kempinski-hotels',
    'marriott',
    'mandarin-oriental',
    'oberoi-hotels',
    'raffles-hotels-and-resorts',
    'relais-and-chateau',
    'ritz-carlton',
    'rosewood',
    'shangri-la-hotels',
    'singita-hotels',
    'six-senses-hotels',
    'sofitel',
    'soneva',
    'saint-regis-hotels',
    'taj-hotels',
    'waldorf-astoria',
    'belmond',
    'the-ritz-carlton',
    'st-regis',
    'the-red-carnation-hotel-collection',
    'waldorf-astoria-hotels-and-resorts',
    'jumeirah-hotels-and-resorts',
    'sofitel-luxury-hotels',
    'the-langham-hotels-and-resorts',
    'kimpton-hotels',
    'intercontinental-hotels-and-resorts',
    'hyatt-regency',
    'the-luxury-collection',
    'occidental-hotels-and-resorts',
    'fairmont-hotels-and-resorts',
    'banyan-tree-hotels-and-resorts',
    'casa-tua-hotel',
    'shangri-la-hotels-and-resorts',
    'bvlgari-hotels-and-resorts',
    'park-hyatt',
    'le-meridien',
    'the-leading-hotels-of-the-world',
    'sls-hotels',
    'six-senses-hotels-resorts-spas',
    'ritz-paris',
    'the-savoy',
    'como-hotels-and-resorts',
    'capella-hotels-and-resorts',
    'thompson-hotels',
    'ace-hotel',
    'the-nomad-hotel'
  ]
  return validSlugs.includes(slug)
}

// Convert slug back to brand name
function slugToBrandName(slug: string): string {
  const slugToNameMap: { [key: string]: string } = {
    'aman': 'Aman',
    'anantara': 'Anantara',
    'auberge-resorts': 'Auberge Resorts',
    'banyan-tree-hotels': 'Banyan Tree Hotels',
    'andbeyond': '&Beyond',
    'como-hotel-and-resorts': 'COMO Hotel and Resorts',
    'fairmont-hotels': 'Fairmont Hotels',
    'four-seasons': 'Four Seasons',
    'kempinski-hotels': 'Kempinski Hotels',
    'marriott': 'Marriott',
    'mandarin-oriental': 'Mandarin Oriental',
    'oberoi-hotels': 'Oberoi Hotels',
    'raffles-hotels-and-resorts': 'Raffles Hotels & Resorts',
    'relais-and-chateau': 'Relais and Chateau',
    'ritz-carlton': 'Ritz Carlton',
    'rosewood': 'Rosewood',
    'shangri-la-hotels': 'Shangri La Hotels',
    'singita-hotels': 'Singita Hotels',
    'six-senses-hotels': 'Six Senses Hotels',
    'sofitel': 'Sofitel',
    'soneva': 'Soneva',
    'saint-regis-hotels': 'Saint Regis Hotels',
    'taj-hotels': 'Taj Hotels',
    'waldorf-astoria': 'Waldorf Astoria',
    'belmond': 'Belmond',
    'the-ritz-carlton': 'The Ritz-Carlton',
    'st-regis': 'St. Regis',
    'the-red-carnation-hotel-collection': 'The Red Carnation Hotel Collection',
    'waldorf-astoria-hotels-and-resorts': 'Waldorf Astoria Hotels & Resorts',
    'jumeirah-hotels-and-resorts': 'Jumeirah Hotels & Resorts',
    'sofitel-luxury-hotels': 'Sofitel Luxury Hotels',
    'the-langham-hotels-and-resorts': 'The Langham Hotels and Resorts',
    'kimpton-hotels': 'Kimpton Hotels',
    'intercontinental-hotels-and-resorts': 'InterContinental Hotels & Resorts',
    'hyatt-regency': 'Hyatt Regency',
    'the-luxury-collection': 'The Luxury Collection',
    'occidental-hotels-and-resorts': 'Occidental Hotels & Resorts',
    'fairmont-hotels-and-resorts': 'Fairmont Hotels & Resorts',
    'banyan-tree-hotels-and-resorts': 'Banyan Tree Hotels & Resorts',
    'casa-tua-hotel': 'Casa Tua Hotel',
    'shangri-la-hotels-and-resorts': 'Shangri-La Hotels and Resorts',
    'bvlgari-hotels-and-resorts': 'Bvlgari Hotels & Resorts',
    'park-hyatt': 'Park Hyatt',
    'le-meridien': 'Le Meridien',
    'the-leading-hotels-of-the-world': 'The Leading Hotels of the World',
    'sls-hotels': 'SLS Hotels',
    'six-senses-hotels-resorts-spas': 'Six Senses Hotels Resorts Spas',
    'ritz-paris': 'Ritz Paris',
    'the-savoy': 'The Savoy',
    'como-hotels-and-resorts': 'COMO Hotels and Resorts',
    'capella-hotels-and-resorts': 'Capella Hotels and Resorts',
    'thompson-hotels': 'Thompson Hotels',
    'ace-hotel': 'Ace Hotel',
    'the-nomad-hotel': 'The NoMad Hotel'
  }
  return slugToNameMap[slug] || slug
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Main content component
async function BrandPageContent({ brandName }: { brandName: string }) {
  // Fetch data from both sources
  const [brandPageData, brandData] = await Promise.all([
    getBrandPageData(brandName), // Sanity: Brand page content
    getBrandByName(brandName),   // Supabase: Brand basic info
  ])

  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <BrandHero data={brandPageData?.hero} brandName={brandName} />
      <div id="philosophy">
        <BrandPhilosophy data={brandPageData?.philosophy} />
      </div>
      
      <div id="why-we-travel">
        <WhyWeTravel data={brandPageData?.whyWeTravel} brandName={brandName} />
      </div>
      
      <div id="benefits">
        <BrandBenefits data={brandPageData?.benefits} />
      </div>
      
      <div id="main">
        <BrandMain data={brandPageData?.main} brandName={brandName} />
      </div>
      
      <div id="itineraries">
        <Itineraries data={brandPageData?.itineraries} />
      </div>
      
      <div id="contact">
        <Testimonials />
        <ContactUs brandName={brandName} />
      </div>
      
      <Footer />
    </main>
  )
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params

  // Validate the slug
  if (!isValidBrandSlug(slug)) {
    notFound()
  }

  const brandName = slugToBrandName(slug)

  return (
    <Suspense fallback={<BrandPageLoading />}>
      <BrandPageContent brandName={brandName} />
    </Suspense>
  )
} 
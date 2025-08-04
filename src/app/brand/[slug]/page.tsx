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
        <p className="text-gray-600 font-inter">Loading brand page...</p>
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
    'waldorf-astoria'
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
    'waldorf-astoria': 'Waldorf Astoria'
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
        <WhyWeTravel data={brandPageData?.whyWeTravel} />
      </div>
      
      <div id="benefits">
        <BrandBenefits data={brandPageData?.benefits} />
      </div>
      
      <div id="main">
        <BrandMain />
      </div>
      
      <div id="itineraries">
        <Itineraries />
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
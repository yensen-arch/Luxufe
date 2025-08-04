import { redirect } from 'next/navigation'
import { getBrands } from '@/lib/database'

export default async function BrandPage() {
  // Get all brands from the database
  const brands = await getBrands()
  
  if (brands.length > 0) {
    // Redirect to the first brand as an example
    const firstBrand = brands[0]
    const brandSlug = firstBrand.name.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')
    redirect(`/brand/${brandSlug}`)
  }
  
  // Fallback if no brands exist
  redirect('/brand/aman')
}
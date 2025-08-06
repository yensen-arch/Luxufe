import { notFound } from 'next/navigation';
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactUs from "@/components/regions/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import ProductHero from "@/components/Product/ProductHero";
import Itineraries from "@/components/brand/Itineraries";
import ProductOverview from "@/components/Product/ProductOverview";
import ProductGrid from "@/components/Product/Grid";
import MapProduct from "@/components/Product/MapProduct";
import OtherAmanHotels from "@/components/Product/OtherAmanHotels";
import HotelCarousel from "@/components/Product/HotelCarousel";
import WhatToDoHere from "@/components/Product/WhatToDoHere";
import { getHotelByName, getBrandByName } from "@/lib/database";

interface PageProps {
  params: Promise<{
    hotelName: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { hotelName } = await params;
  
  // Decode the hotel name from URL
  const decodedHotelName = decodeURIComponent(hotelName);
  
  // Fetch hotel data
  const hotel = await getHotelByName(decodedHotelName);
  
  if (!hotel) {
    notFound();
  }
  
  // Fetch brand data for the hotel
  const brand = await getBrandByName(hotel.brand);
  
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <ProductHero hotel={hotel} />
      <ProductOverview hotel={hotel} brand={brand} />
      <WhatToDoHere />
      <ProductGrid hotel={hotel} />
      <HotelCarousel hotel={hotel} />
      <MapProduct hotel={hotel} />
      <Itineraries />
      <OtherAmanHotels hotel={hotel} />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
} 
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
      <div id="overview">
        <ProductOverview hotel={hotel} brand={brand} />
      </div>
      <div id="what-to-do">
        <WhatToDoHere />
      </div>
      <div id="rooms-and-suites">
        <ProductGrid hotel={hotel} />
       </div>
       <div id="gallery">
        <HotelCarousel hotel={hotel} />
      </div>
      <div id="location">
        <MapProduct hotel={hotel} />
      </div>
      <div id="itineraries">
        <Itineraries />
        <OtherAmanHotels hotel={hotel} />
      </div>
      <Testimonials />
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
} 
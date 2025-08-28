import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { getAllLandItineraries } from "@/lib/database";
import Link from "next/link";

export default async function LandItineraries() {
  // Fetch all land itineraries
  const itineraries = await getAllLandItineraries();

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-arpona font-bold text-gray-900 mb-4">
              Land Journeys
            </h1>
            <p className="text-lg text-gray-600 font-inter">
              Discover our curated collection of extraordinary land adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => {
              return (
                <Link 
                  key={itinerary.id} 
                  href={`/itineraries/land/${itinerary.id}`}
                  className="group block bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    {/* Parse gallery for hero image */}
                    {itinerary.gallery && (() => {
                      try {
                        const galleryImages = JSON.parse(itinerary.gallery.replace(/'/g, '"'));
                        const heroImage = galleryImages.length > 0 ? galleryImages[0] : null;
                        return heroImage ? (
                          <img
                            src={heroImage}
                            alt={itinerary.itinerary_name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500">No image</span>
                          </div>
                        );
                      } catch (error) {
                        return (
                          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500">No image</span>
                          </div>
                        );
                      }
                    })()}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-arpona font-bold text-gray-900 mb-2 group-hover:text-[#A5C8CE] transition-colors">
                      {itinerary.itinerary_name}
                    </h3>
                    <p className="text-sm text-gray-600 font-inter mb-3">
                      {itinerary.destinations}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-inter font-bold text-gray-700">
                        {itinerary.duration}
                      </span>
                      <span className="text-sm font-inter text-gray-500">
                        Land Journey
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
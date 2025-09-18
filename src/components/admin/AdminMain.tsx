"use client";
import { useState } from "react";
import { BarChart3, Image, Users, Hotel, MapPin, Calendar, Settings } from "lucide-react";
import BrandSelector from "./BrandSelector";
import BrandImageManager from "./BrandImageManager";
import BrandImageModal from "./BrandImageModal";
import ManageLandItineraries from "./ManageLandItineraries";

interface Brand {
  id: string;
  name: string;
  description?: string;
  brand_image?: string;
}

interface AdminMainProps {
  activeSection: string;
}

export default function AdminMain({ activeSection }: AdminMainProps) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | undefined>();
  const [showBrandImageModal, setShowBrandImageModal] = useState(false);

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const handleBrandImageUpdate = (imageUrl: string) => {
    if (selectedBrand) {
      setSelectedBrand({
        ...selectedBrand,
        brand_image: imageUrl
      });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'hotel-images':
        return <HotelImagesSection selectedBrand={selectedBrand} onBrandSelect={handleBrandSelect} onEditBrandImage={() => setShowBrandImageModal(true)} />;
      case 'land-itineraries':
        return <ManageLandItineraries />;
      case 'users':
        return <UsersSection />;
      case 'hotels':
        return <HotelsSection />;
      case 'destinations':
        return <DestinationsSection />;
      case 'bookings':
        return <BookingsSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-8">
        {renderSection()}
      </div>
      
      {/* Brand Image Modal */}
      {selectedBrand && (
        <BrandImageModal
          isOpen={showBrandImageModal}
          onClose={() => setShowBrandImageModal(false)}
          brand={selectedBrand}
          onImageUpdate={handleBrandImageUpdate}
        />
      )}
    </div>
  );
}

// Dashboard Section
function DashboardSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
      </div>
    </div>
  );
}

// Hotel Images Section
function HotelImagesSection({ 
  selectedBrand, 
  onBrandSelect,
  onEditBrandImage
}: { 
  selectedBrand?: Brand; 
  onBrandSelect: (brand: Brand) => void;
  onEditBrandImage: () => void;
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          Hotel Images Management
        </h1>
        <p className="text-gray-600 font-inter">
          Manage hotel brand images and visual content for your platform.
        </p>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 p-6 flex-1 flex flex-col">
        <div className="mb-6">
          <h2 className="text-xl font-arpona font-bold text-gray-900 mb-4">
            Select Brand
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Brand Selector */}
            <div className="flex-1">
              <BrandSelector 
                onBrandSelect={onBrandSelect} 
                selectedBrand={selectedBrand} 
              />
            </div>
            
            {/* Brand Hero Image Display */}
            {selectedBrand && (
              <div className="flex-shrink-0">
                <div className="relative w-96 h-60 bg-gray-100 border border-gray-200">
                  {selectedBrand.brand_image ? (
                    <img
                      src={selectedBrand.brand_image}
                      alt={`${selectedBrand.name} hero image`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500 font-inter">No hero image for this Brand</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Edit Button - Always visible */}
                  <button
                    onClick={onEditBrandImage}
                    className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
                    title="Edit brand hero image"
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedBrand && (
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-arpona font-bold text-gray-900 mb-4">
              Manage brand card images for {selectedBrand.name}
            </h3>
            <div className="flex-1">
              <BrandImageManager selectedBrand={selectedBrand} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Users Section
function UsersSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          User Management
        </h1>
        <p className="text-gray-600 font-inter">
          Manage user accounts and permissions.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-inter">User management interface coming soon.</p>
        </div>
      </div>
    </div>
  );
}

// Hotels Section
function HotelsSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          Hotel Management
        </h1>
        <p className="text-gray-600 font-inter">
          Manage hotel properties and information.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <Hotel className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-inter">Hotel management interface coming soon.</p>
        </div>
      </div>
    </div>
  );
}

// Destinations Section
function DestinationsSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          Destination Management
        </h1>
        <p className="text-gray-600 font-inter">
          Manage destinations and location information.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-inter">Destination management interface coming soon.</p>
        </div>
      </div>
    </div>
  );
}

// Bookings Section
function BookingsSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          Booking Management
        </h1>
        <p className="text-gray-600 font-inter">
          View and manage travel bookings.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-inter">Booking management interface coming soon.</p>
        </div>
      </div>
    </div>
  );
}



// Settings Section
function SettingsSection() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
          System Settings
        </h1>
        <p className="text-gray-600 font-inter">
          Configure system settings and preferences.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="text-center py-12">
          <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-inter">Settings interface coming soon.</p>
        </div>
      </div>
    </div>
  );
}

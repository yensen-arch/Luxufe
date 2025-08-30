"use client";
import { useState } from "react";
import { BarChart3, Image, Users, Hotel, MapPin, Calendar, Settings } from "lucide-react";
import BrandSelector from "./BrandSelector";
import BrandImageManager from "./BrandImageManager";
import ManageLandItineraries from "./ManageLandItineraries";

interface Brand {
  id: string;
  name: string;
  description?: string;
}

interface AdminMainProps {
  activeSection: string;
}

export default function AdminMain({ activeSection }: AdminMainProps) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | undefined>();

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'hotel-images':
        return <HotelImagesSection selectedBrand={selectedBrand} onBrandSelect={handleBrandSelect} />;
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
  onBrandSelect 
}: { 
  selectedBrand?: Brand; 
  onBrandSelect: (brand: Brand) => void; 
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
          <BrandSelector 
            onBrandSelect={onBrandSelect} 
            selectedBrand={selectedBrand} 
          />
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

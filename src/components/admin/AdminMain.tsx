"use client";
import { useState } from "react";
import { BarChart3, Image, Users, Hotel, MapPin, Calendar, Settings } from "lucide-react";
import BrandSelector from "./BrandSelector";
import BrandImageManager from "./BrandImageManager";

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
        <p className="text-gray-600 font-inter">
          Welcome to your admin dashboard. Monitor and manage your luxury travel platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-[#A5C8CE]/10 rounded-lg">
              <Users className="w-6 h-6 text-[#A5C8CE]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-inter text-gray-600">Total Users</p>
              <p className="text-2xl font-arpona font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-[#A5C8CE]/10 rounded-lg">
              <Hotel className="w-6 h-6 text-[#A5C8CE]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-inter text-gray-600">Hotels</p>
              <p className="text-2xl font-arpona font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-[#A5C8CE]/10 rounded-lg">
              <MapPin className="w-6 h-6 text-[#A5C8CE]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-inter text-gray-600">Destinations</p>
              <p className="text-2xl font-arpona font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-[#A5C8CE]/10 rounded-lg">
              <Calendar className="w-6 h-6 text-[#A5C8CE]" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-inter text-gray-600">Bookings</p>
              <p className="text-2xl font-arpona font-bold text-gray-900">567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-arpona font-bold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#A5C8CE] hover:bg-[#A5C8CE]/5 transition-colors">
            <Users className="w-5 h-5 text-gray-600 mr-3" />
            <span className="font-inter font-bold text-gray-700">Manage Users</span>
          </button>
          
          <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#A5C8CE] hover:bg-[#A5C8CE]/5 transition-colors">
            <Hotel className="w-5 h-5 text-gray-600 mr-3" />
            <span className="font-inter font-bold text-gray-700">Manage Hotels</span>
          </button>
          
          <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-[#A5C8CE] hover:bg-[#A5C8CE]/5 transition-colors">
            <BarChart3 className="w-5 h-5 text-gray-600 mr-3" />
            <span className="font-inter font-bold text-gray-700">View Analytics</span>
          </button>
        </div>
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

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex-1 flex flex-col">
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
              Manage Images for {selectedBrand.name}
            </h3>
            <div className="flex-1">
              <BrandImageManager selectedBrand={selectedBrand} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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

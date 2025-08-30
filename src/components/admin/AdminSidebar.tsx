"use client";
import { useState } from "react";
import { LogOut, Settings, Users, Hotel, MapPin, Calendar, BarChart3, Image as ImageIcon, Menu, X, Map } from "lucide-react";
import Image from "next/image";

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onSignOut: () => void;
  userEmail?: string;
}

export default function AdminSidebar({ 
  activeSection, 
  onSectionChange, 
  onSignOut, 
  userEmail 
}: AdminSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      description: 'Overview and analytics'
    },
    {
      id: 'hotel-images',
      label: 'Manage Images',
      icon: ImageIcon,
      description: 'Manage hotel brand images'
    },
    {
      id: 'land-itineraries',
      label: 'Land Itineraries',
      icon: Map,
      description: 'Manage land journey itineraries'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      description: 'Manage user accounts'
    },
    {
      id: 'hotels',
      label: 'Hotels',
      icon: Hotel,
      description: 'Manage hotel properties'
    },
    {
      id: 'destinations',
      label: 'Destinations',
      icon: MapPin,
      description: 'Manage destinations'
    },
    {
      id: 'bookings',
      label: 'Bookings',
      icon: Calendar,
      description: 'View and manage bookings'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      description: 'System configuration'
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white shadow-lg border-r border-gray-200 h-screen flex flex-col transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          {!isCollapsed && (
            <Image 
              src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" 
              alt="Luxufe" 
              width={100} 
              height={32}
            />
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? <Menu className="w-5 h-5 text-gray-600" /> : <X className="w-5 h-5 text-gray-600" />}
        </button>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#A5C8CE] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-inter text-sm font-bold">
              {userEmail?.charAt(0).toUpperCase() || 'A'}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-inter font-bold text-gray-900 truncate">
                {userEmail || 'Admin User'}
              </p>
              <p className="text-xs text-gray-500 font-inter">Administrator</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                isActive 
                  ? 'bg-[#A5C8CE] text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`} />
              {!isCollapsed && (
                <div className="flex-1">
                  <p className={`font-inter font-bold text-sm ${isActive ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </p>
                  <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {item.description}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sign Out Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onSignOut}
          className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
          title={isCollapsed ? 'Sign Out' : undefined}
        >
          <LogOut className="w-5 h-5 text-gray-500 flex-shrink-0" />
          {!isCollapsed && (
            <span className="font-inter font-bold text-sm">Sign Out</span>
          )}
        </button>
      </div>
    </div>
  );
}

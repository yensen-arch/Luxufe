"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { LogOut, Settings, Users, Hotel, MapPin, Calendar, BarChart3 } from "lucide-react";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/admin/login');
        return;
      }

      // Check if user has admin role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        router.push('/admin/login');
        return;
      }

      setUser(user);
    } catch (error) {
      console.error('Error checking user:', error);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A5C8CE] mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image 
                src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" 
                alt="Luxufe" 
                width={120} 
                height={40}
              />
              <span className="ml-4 text-gray-500 font-inter text-sm">Admin Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-inter text-sm">
                Welcome, {user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-inter text-sm transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-arpona font-bold text-gray-900 mb-2">
            Welcome to Luxufe Admin
          </h1>
          <p className="text-gray-600 font-inter">
            Manage your luxury travel platform from this central dashboard.
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

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-arpona font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-inter font-bold text-gray-900">New hotel added</p>
                <p className="text-sm text-gray-600">Aman Tokyo was added to the platform</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-inter font-bold text-gray-900">Booking confirmed</p>
                <p className="text-sm text-gray-600">Booking #12345 for Maldives trip</p>
              </div>
              <span className="text-sm text-gray-500">4 hours ago</span>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-inter font-bold text-gray-900">New user registered</p>
                <p className="text-sm text-gray-600">john.doe@example.com joined</p>
              </div>
              <span className="text-sm text-gray-500">6 hours ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

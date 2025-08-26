"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log('Attempting login with:', email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Auth error:', error);
        setError(error.message);
      } else if (data.user) {
        console.log('User authenticated:', data.user.id);
        
        // Check if user has admin role
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        console.log('Profile query result:', { profile, profileError });

        if (profileError) {
          console.error('Profile error:', profileError);
          setError('Error checking admin privileges');
          await supabase.auth.signOut();
        } else if (profile?.role === 'admin') {
          console.log('Admin role confirmed, redirecting...');
          router.push('/admin/dashboard');
          // Force a refresh to ensure the redirect works
          window.location.href = '/admin/dashboard';
        } else {
          console.log('Not admin role:', profile?.role);
          setError('Access denied. Admin privileges required.');
          await supabase.auth.signOut();
        }
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image 
            src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" 
            alt="Luxufe" 
            width={200} 
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-arpona font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-gray-400 font-inter text-sm">Access the management dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-300 font-inter text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-white font-inter font-bold text-sm mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-white font-inter font-bold text-sm mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 font-inter focus:outline-none focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A5C8CE] hover:bg-[#8bb3b8] disabled:bg-gray-600 text-white font-inter font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 font-inter text-xs">
            © 2024 Luxufe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

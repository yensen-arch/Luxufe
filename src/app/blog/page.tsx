'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/common/Navbar';
import BlogSidebar from '@/components/blogs/BlogSidebar';
import BlogContent from '@/components/blogs/BlogContent';
import BlogHero from '@/components/blogs/BlogHero';
import BlogKeepReading from '@/components/blogs/BlogKeepReading';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/common/Footer';
import EffortlessLuxury from '@/components/blogs/EffortlessLuxury';
import { getBlogPageData, type BlogPageData } from '@/lib/sanity';

export default function Blog() {
  const [blogData, setBlogData] = useState<BlogPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogPageData();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-900">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BlogHero 
        title="Blog post title will go here"
        tags={["TRAVEL ADVICE", "TRAVEL ADVICE"]}
        data={blogData?.hero} 
      />
      <div className="flex flex-col md:flex-row mx-auto w-[80vw] pt-24 pb-12">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <BlogSidebar />
        </div>
        <div className="w-full md:w-2/3">
          <BlogContent />
        </div>
      </div>
      <BlogKeepReading />
      <EffortlessLuxury data={blogData?.effortlessLuxury} />
      <ContactUs />
      <Footer />
    </div>
  );
}
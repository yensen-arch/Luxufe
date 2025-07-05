import Navbar from '@/components/common/Navbar';
import BlogSidebar from '@/components/blogs/BlogSidebar';
import BlogContent from '@/components/blogs/BlogContent';
import BlogHero from '@/components/blogs/BlogHero';
import BlogKeepReading from '@/components/blogs/BlogKeepReading';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/common/Footer';

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BlogHero
        title="Blog post title will go here"
        tags={["TRAVEL ADVICE", "TRAVEL ADVICE"]}
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
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
      <ContactUs />
      <Footer />
    </div>
  );
}
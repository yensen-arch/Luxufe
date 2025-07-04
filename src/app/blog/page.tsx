import Navbar from '@/components/common/Navbar';
import BlogHero from '@/components/blogs/BlogHero';

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <BlogHero
        title="Blog post title will go here"
        tags={["TRAVEL ADVICE", "TRAVEL ADVICE"]}
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />
    </div>
  );
}
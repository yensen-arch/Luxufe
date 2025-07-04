import React from "react";

const posts = [
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "Travel Advice",
  },
];

function MasonryCard({ post, className = "" }: { post: typeof posts[0]; className?: string }) {
  return (
    <div className={`relative group overflow-hidden bg-gray-200 ${className}`}>
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="uppercase text-xs font-inter tracking-widest text-white/80 mb-2">{post.category}</span>
        <div className="flex flex-col justify-end h-full">
          <h3 className="text-white w-2/3 text-xl md:text-2xl font-arpona font-bold mb-4">{post.title}</h3>
          <button className="bg-white text-black font-inter font-bold px-4 py-2 text-xs shadow hover:bg-gray-100 w-fit">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default function BlogMasonryGrid() {
  return (
    <section className="w-full max-w-8xl mx-auto px-14 mb-20">
      <div className="flex flex-col gap-6">
        {/* Row 1: 2 cols */}
        <div className="flex gap-6 h-[800px]">
          {/* Left col */}
          <div className="flex flex-col gap-6 w-1/2 h-full">
            {/* Top row: 1 card, 1/3 height */}
            <div className="h-3/7 w-full">
              <MasonryCard post={posts[0]} className="h-full shadow-lg" />
            </div>
            {/* Bottom row: 2 cards, 2/3 height */}
            <div className="flex gap-6 h-2/3 w-full">
              <MasonryCard post={posts[1]} className="h-full w-1/2 shadow-lg" />
              <MasonryCard post={posts[2]} className="h-full w-1/2 shadow-lg" />
            </div>
          </div>
          {/* Right col */}
          <div className="flex flex-col gap-6 w-1/2 h-full">
            {/* Top row: 2 cards, 2/3 height */}
            <div className="flex gap-6 h-2/3 w-full">
              <MasonryCard post={posts[3]} className="h-full w-1/2 shadow-lg" />
              <MasonryCard post={posts[4]} className="h-full w-1/2 shadow-lg" />
            </div>
            {/* Bottom row: 1 card, 1/3 height */}
            <div className="h-1/3 w-full">
              <MasonryCard post={posts[5]} className="h-full shadow-lg" />
            </div>
          </div>
        </div>
        {/* Row 2: 3 col grid, 1/3 height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[550px]">
          <MasonryCard post={posts[6]} className="h-full shadow-lg" />
          <MasonryCard post={posts[7]} className="h-full shadow-lg" />
          <MasonryCard post={posts[8]} className="h-full shadow-lg" />
        </div>
      </div>
    </section>
  );
} 
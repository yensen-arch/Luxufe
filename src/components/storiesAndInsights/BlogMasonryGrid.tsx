import React from "react";

const posts = [
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    tall: true,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tall: true,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
  {
    title: "This is a blog post title that will go right here",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    tall: false,
  },
];

export default function BlogMasonryGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ gridAutoRows: "320px" }}
      >
        {posts.map((post, i) => (
          <div
            key={i}
            className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-200 ${post.tall ? "row-span-2" : ""}`}
            style={{ minHeight: post.tall ? 480 : 320 }}
          >
            {/* Background image */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="uppercase text-xs font-inter tracking-widest text-white/80 mb-2">Travel Advice</span>
              <div className="flex flex-col justify-end h-full">
                <h3 className="text-white text-xl md:text-2xl font-arpona font-bold mb-4">{post.title}</h3>
                <button className="bg-white text-black font-inter font-bold px-6 py-2 text-xs rounded shadow hover:bg-gray-100 w-fit">READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
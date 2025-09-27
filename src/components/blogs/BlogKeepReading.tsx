import React from "react";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    tag: "TRAVEL ADVICE",
    title: "This is a blog post title that will go right here",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tag: "TRAVEL ADVICE",
    title: "This is a blog post title that will go right here",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    tag: "TRAVEL ADVICE",
    title: "This is a blog post title that will go right here",
    href: "#",
  },
];

export default function BlogKeepReading() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-arpona font-bold text-center text-[#23263a] mb-8 md:mb-12 lg:mb-16">Keep reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {posts.map((post, idx) => (
            <div key={idx} className="relative group overflow-hidden bg-black">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] lg:h-[550px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              {/* Category at top left */}
              <span className="absolute top-4 md:top-5 lg:top-6 left-4 md:left-5 lg:left-6 text-xs font-inter text-white tracking-widest font-bold z-20">
                {post.tag}
              </span>
              {/* Title and Button at bottom left */}
              <div className="absolute left-4 md:left-5 lg:left-6 bottom-4 md:bottom-5 lg:bottom-6 z-20 flex flex-col items-start w-4/5">
                <h3 className="text-lg md:text-2xl w-full lg:w-2/3 font-arpona font-bold text-slate-300 mb-4 md:mb-5 lg:mb-6 leading-snug">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="inline-block bg-white text-black font-inter font-bold text-xs px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 hover:bg-slate-100 transition"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
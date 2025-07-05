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
    <section className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-arpona font-bold text-center text-[#23263a] mb-16">Keep reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, idx) => (
            <div key={idx} className="relative group overflow-hidden bg-black">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <span className="text-xs font-inter text-white mb-2 tracking-widest font-bold">{post.tag}</span>
                <h3 className="text-2xl font-arpona font-bold text-white mb-8">{post.title}</h3>
                <a
                  href={post.href}
                  className="inline-block bg-white text-black font-inter font-bold text-xs px-6 py-3 rounded hover:bg-slate-100 transition"
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
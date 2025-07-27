import React from "react";

export default function TestimonialCard({
  quote = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
  supporting = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  avatar = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80",
  name = "Name Here",
}: {
  quote?: string;
  supporting?: string;
  avatar?: string;
  name?: string;
}) {
  return (
    <div className="bg-white p-12 mx-auto flex flex-col gap-6 border border-gray-400">
      {/* Stars */}
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.64 16.56,18 10,13.72 3.44,18 6.03,11.64 0.49,7.36 7.41,7.36" /></svg>
        ))}
      </div>
      {/* Main Quote */}
      <blockquote className="text-xl md:text-2xl font-arpona font-bold text-[#23263a] leading-snug mb-4">“{quote}”</blockquote>
      {/* Supporting Quote */}
      <p className="text-md font-bold font-inter text-[#23263a] mb-6">“{supporting}”</p>
      {/* Avatar and Name */}
      <div className="flex items-center gap-4 mt-4">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <span className="text-gray-400 text-sm font-inter font-bold">{name}</span>
      </div>
    </div>
  );
} 
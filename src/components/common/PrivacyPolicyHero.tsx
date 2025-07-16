import React from "react";

export default function PrivacyPolicyHero() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[48vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Privacy Policy Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-arpona font-medium">Privacy Policy</h1>
        </div>
      </div>
      {/* Text Section */}
      <div className="w-full bg-[#f7f7fa] py-32 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-bold mb-4">This is a heading level 2</h2>
          <p className="font-inter text-md text-[#23263a] font-bold mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
          </p>
          <h3 className="text-xl md:text-3xl font-arpona text-[#23263a] font-bold mb-4">This is a heading level 3</h3>
          <p className="font-inter text-md text-[#23263a] font-bold mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
          </p>
          <h4 className="text-lg font-inter font-bold uppercase tracking-widest text-[#23263a] mb-4">This is a heading level 4</h4>
          <p className="font-inter text-md text-[#23263a] font-bold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </section>
  );
} 
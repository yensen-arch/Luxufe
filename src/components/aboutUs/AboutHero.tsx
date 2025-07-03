
export default function AboutHero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/about-hero/1920/1080')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="relative z-10 p-4 max-w-5xl mx-auto">
        <p className="text-5xl italic mb-4 font-bellarina">About us</p>
        <h1 className="text-6xl font-arpona mb-6">
          The Art of Effortless Luxury Travel
        </h1>
        <p className="mt-6 max-w-2xl mx-auto font-inter font-bold text-md leading-relaxed">
          Thoughtfully Designed journeys, Crafted for you
        </p>
      </div>
    </div>
  );
} 
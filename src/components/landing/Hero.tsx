import ChatWidget from "./ChatWidget";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/picsum/1920/1080')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      <div className="relative p-4">
        <p className="text-5xl italic mb-4 font-bellarina">Your travel, your way</p>
        <h1 className="text-6xl leading-tight font-arpona">
          Unforgettable Luxury
          <br />
          Travel Experiences
        </h1>
        <p className="mt-6 max-w-xl mx-auto font-inter font-bold">
          Time is your greatest luxury. At Luxufe, we go beyond travel, refining every
          unforgettable moment so that it is tailored to you.
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
        <ChatWidget />
      </div>
    </div>
  );
} 
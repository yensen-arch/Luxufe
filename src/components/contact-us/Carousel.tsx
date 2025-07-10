export default function Carousel() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-transparent my-70">
      {/* Background Sheet */}
      <div
        className="absolute left-1/2 top-1/2 w-full h-full bg-gray-100 -translate-x-1/2 z-0"
        aria-hidden="true"
      />
      {/* Foreground Card (Image) */}
      <div
        className="absolute left-1/2 top-1/2 w-[80vw] h-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          alt="Cocktail"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}


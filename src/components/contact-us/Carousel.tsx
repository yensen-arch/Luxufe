export default function Carousel() {

  return (
    <section className="overflow-hidden mt-20 h-screen">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-end min-h-[650px]">
          {/* Base Section */}
          <div className="bg-gray-100 w-8/8 mt-8 h-[80vh] lg:absolute">
          </div>
          {/* Image Section */}
          <div className="w-5/7 h-full z-10 -translate-x-1/2 -top-40 relative left-1/2">
            <div className=" overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Cocktail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}


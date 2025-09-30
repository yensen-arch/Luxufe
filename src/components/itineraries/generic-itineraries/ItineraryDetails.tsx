import ItineraryOptions from "./ItineraryOptions";

export default function ItineraryDetails() {
  return (
    <section className="bg-white border-t-2 border-gray-300">
      <div className="mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-[#f5f6f7]">
        <div className="border-b-2 border-gray-300 w-full">
          <h2 className="text-2xl md:text-3xl px-4 md:px-8 pt-6 md:pt-8 font-arpona font-bold text-black mb-3 md:mb-4">Delightful Douro</h2></div>
          <nav className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 text-sm font-inter font-bold px-4 md:px-8 pt-6 md:pt-8">
            <a href="#" className="hover:underline">Trip Overview</a>
            <a href="#" className="hover:underline">Map & Highlights</a>
            <a href="#" className="hover:underline">Daily Itinerary</a>
            <a href="#" className="hover:underline">Pricing & Options</a>
            <a href="#" className="hover:underline">The Ship</a>
            <a href="#" className="hover:underline">Good to know</a>
          </nav>
          <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8 px-4 md:px-8 pt-6 md:pt-8">
            <button className="w-full border-2 border-gray-300 text-xs py-2 md:py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">BOOK THIS ITINERARY <span><img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" /></span></button>
            <button className="w-full border-2 border-gray-300 text-xs py-2 md:py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">CONTACT US <span><img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" /></span></button>
            <button className="w-full border-2 border-gray-300 text-xs py-2 md:py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">SEND TO A FRIEND <span><img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" /></span></button>
          </div>
          <div className="text-xs max-w-4/6 mt-8 md:mt-12 mx-auto text-center font-inter font-bold text-gray-700 px-4 md:px-0">
            For questions or booking inquiries, call <a href="tel:1-800-642-2861" className="text-orange-800 hover:underline">1-800-642-2861</a> or <a href="#" className="underline">contact us.</a>
          </div>
        </aside>
        {/* Main Content */}
        <div className="md:w-3/4 p-6 md:p-20 border-l-2 border-gray-300">
          <h1 className="text-3xl md:text-5xl font-arpona font-bold text-gray-900 mb-4 md:mb-6">The soul of Portugal</h1>
          <p className="text-sm md:text-lg w-full md:w-4/5 font-inter font-bold mb-6 md:mb-8">From windswept seaside meanderings to the astonishing beauty of the Douro Valley, this is a journey of contemplation and elegance. In Porto, board the luxurious Scenic Azure, which will transport you through the hidden gem that is the Douro Valley. Days will be spent immersed in the proud history and culture of a unique land that still retains many of its centuries-old traditions.</p>
          {/* Special Offer Box */}
          <div className="flex flex-col md:flex-row w-full md:w-4/5 items-start md:items-center bg-[#E3EFF1] border border-[#A5C8CE] p-4 md:p-6 mb-8 md:mb-10">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-normal text-gray-600"><img src="/luxufe-icon-metro-trophy.svg" alt="bullet-point" className="w-4 h-4 md:w-5 md:h-5 text-[#A5C8CE]" /></span>
                <div className="font-inter font-bold text-sm md:text-md text-gray-600 mb-1">Special Offer</div>
              </div>
              <div className="text-gray-500 text-xs md:text-sm font-inter font-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</div>
            </div>
            <button className="md:ml-6 border-2 text-xs border-gray-300 px-4 md:px-6 py-2 md:py-3 font-inter font-bold text-gray-700 flex items-center gap-2 hover:bg-gray-800 hover:text-white transition w-full md:w-auto justify-center">VIEW DETAILS <span><img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" /></span></button>
          </div>
          {/* Journey at a Glance */}
          <h2 className="text-2xl md:text-3xl w-full md:w-4/5 font-arpona font-bold text-gray-900 mb-3 md:mb-4">Your journey at a glance</h2>
          <div className="h-60 md:h-90 w-full md:w-4/5 bg-gray-100 rounded-md mb-8 md:mb-10 flex items-center justify-center">
            {/* Placeholder for map image */}
            <span className="text-gray-400 font-inter font-bold text-sm md:text-base">[Map Image]</span>
          </div>
          {/* Journey Highlights */}
          <div className="w-full mb-8 md:mb-20">
          <h2 className="text-2xl md:text-3xl w-full md:w-4/5 font-arpona font-bold text-gray-900 mb-4 md:mb-6">Journey Highlights</h2>
          <div className="grid w-full md:w-4/5 grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-start gap-3 md:gap-4">
                  <img src="/luxufe-icon-star-ratings-solid-teal.svg" alt="bullet-point" className="w-4 h-4 md:w-5 md:h-5 text-[#A5C8CE] mt-1" />                
                  <span className="text-gray-800 font-inter font-bold text-sm md:text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</span>
              </div>
            ))}
          </div>
          </div>
          {/* Itinerary Options */}
          <ItineraryOptions />
        </div>
      </div>
    </section>
  );
} 
import ItineraryOptions from "./ItineraryOptions";

export default function ItineraryDetails() {
  return (
    <section className="bg-white border-t border-gray-400">
      <div className="mx-auto flex flex-col md:flex-row  ">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-gray-50">
        <div className="border-b border-gray-400 w-full">
          <h2 className="text-3xl px-8 pt-8 font-arpona font-bold text-black mb-4">Delightful Douro</h2></div>
          <nav className="flex flex-col gap-4 mb-8 text-sm font-inter font-bold px-8 pt-8">
            <a href="#" className="hover:underline">Trip Overview</a>
            <a href="#" className="hover:underline">Map & Highlights</a>
            <a href="#" className="hover:underline">Daily Itinerary</a>
            <a href="#" className="hover:underline">Pricing & Options</a>
            <a href="#" className="hover:underline">The Ship</a>
            <a href="#" className="hover:underline">Good to know</a>
          </nav>
          <div className="flex flex-col gap-4 mb-8 px-8 pt-8">
            <button className="w-full border border-gray-400 text-xs py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">BOOK THIS ITINERARY <span>&rarr;</span></button>
            <button className="w-full border border-gray-400 text-xs py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">CONTACT US <span>&rarr;</span></button>
            <button className="w-full border border-gray-400 text-xs py-3 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition">SEND TO A FRIEND <span>&rarr;</span></button>
          </div>
          <div className="text-xs max-w-4/6 mt-12 mx-auto text-center font-inter font-bold text-gray-700">
            For questions or booking inquiries, call <a href="tel:1-800-642-2861" className="text-orange-800 hover:underline">1-800-642-2861</a> or <a href="#" className="underline">contact us.</a>
          </div>
        </aside>
        {/* Main Content */}
        <div className="md:w-3/4 p-20 border-t border-l border-gray-300">
          <h1 className="text-5xl font-arpona font-bold text-gray-900 mb-6">The soul of Portugal</h1>
          <p className="text-md w-4/5 font-inter font-bold mb-8">From windswept seaside meanderings to the astonishing beauty of the Douro Valley, this is a journey of contemplation and elegance. In Porto, board the luxurious Scenic Azure, which will transport you through the hidden gem that is the Douro Valley. Days will be spent immersed in the proud history and culture of a unique land that still retains many of its centuries-old traditions.</p>
          {/* Special Offer Box */}
          <div className="flex w-4/5 items-center bg-[#E3EFF1] border border-[#A5C8CE] p-6 mb-10">
            <div className="flex-1">
              <div className="font-inter font-bold text-md text-gray-600 mb-1">Special Offer</div>
              <div className="text-gray-500 text-sm font-inter font-bold">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</div>
            </div>
            <button className="ml-6 border text-xs border-gray-400 px-6 py-3 font-inter font-bold text-gray-700 flex items-center gap-2 hover:bg-gray-800 hover:text-white transition">VIEW DETAILS <span>&rarr;</span></button>
          </div>
          {/* Journey at a Glance */}
          <h2 className="text-3xl w-4/5 font-arpona font-bold text-gray-900 mb-4">Your journey at a glance</h2>
          <div className="h-90 w-4/5 bg-gray-100 rounded-md mb-10 flex items-center justify-center">
            {/* Placeholder for map image */}
            <span className="text-gray-400 font-inter font-bold">[Map Image]</span>
          </div>
          {/* Journey Highlights */}
          <h2 className="text-3xl w-4/5 font-arpona font-bold text-gray-900 mb-6">Journey Highlights</h2>
          <div className="grid w-4/5 grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <svg className="w-8 h-8 text-[#A5C8CE] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 9,8.5" /></svg>
                <span className="text-gray-800 font-inter font-bold text-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</span>
              </div>
            ))}
          </div>
          {/* Itinerary Options */}
          <ItineraryOptions />
        </div>
      </div>
    </section>
  );
} 
const cabins = [
    {
      name: "Junior Suite BJ",
      price: "$6,545",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Balcony Suite PA",
      price: "$6,545",
      sleeps: 4,
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Junior Suite BJ",
      price: "$6,545",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Balcony Suite PA",
      price: "$6,545",
      sleeps: 2,
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    }
  ];
  
  export default function AvailableHotels() {
    return (
      <div className="flex-1 px-8 py-12 w-4/5">
        <h2 className="text-3xl font-arpona font-bold text-gray-900 mb-8">Available Cabins for your selected dates</h2>
        <div className="grid grid-cols-2 gap-8">
          {cabins.map((cabin, idx) => (
            <div key={idx} className="relative overflow-hidden shadow group bg-white">
              <img src={cabin.img} alt={cabin.name} className="w-full h-56 object-cover" />
              <button className="absolute top-3 left-3 bg-white bg-opacity-70 rounded-full w-5 h-5 flex items-center justify-center text-gray-700 text-lg border border-gray-200">i</button>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-row gap-2 items-center">
                <div className="flex flex-col gap-2 items-start justify-around flex-1">
                  <div className="text-white text-xl font-arpona font-bold">{cabin.name}</div>
                  <div className="text-gray-200 text-sm font-inter">{cabin.price} | SLEEPS {cabin.sleeps}</div>
                </div>
                <button className="text-xs px-4 py-2 bg-white text-gray-900 font-inter font-bold shadow hover:bg-gray-100">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } 
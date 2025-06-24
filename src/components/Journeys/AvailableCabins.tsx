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

export default function AvailableCabins() {
  return (
    <div className="flex-1 px-8">
      <h2 className="text-3xl font-arpona font-light text-gray-900 mb-8">Available Cabins for your selected dates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cabins.map((cabin, idx) => (
          <div key={idx} className="relative rounded-lg overflow-hidden shadow group bg-white">
            <img src={cabin.img} alt={cabin.name} className="w-full h-56 object-cover" />
            <button className="absolute top-3 left-3 bg-white bg-opacity-80 rounded-full w-7 h-7 flex items-center justify-center text-gray-700 font-bold text-lg border border-gray-200">i</button>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col gap-2">
              <div className="text-white text-xl font-arpona font-bold">{cabin.name}</div>
              <div className="text-gray-200 text-sm font-inter">{cabin.price} | SLEEPS {cabin.sleeps}</div>
              <button className="mt-2 px-6 py-2 bg-white text-gray-900 font-inter font-bold rounded shadow hover:bg-gray-100 w-max">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
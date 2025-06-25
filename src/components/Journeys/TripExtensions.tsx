"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";

const EXTENSION_TABS = [
  { label: "PRE-CRUISE EXTENSIONS", key: "pre" },
  { label: "POST-CRUISE EXTENSIONS", key: "post" }
];

const EXTENSIONS = {
  pre: [
    {
      location: "Budapest",
      days: 3,
      title: "Budapest Pre-Cruise Extension",
      price: "From R 16 000 per person (for 2 guests)",
      desc:
        "Bisected by the Danube, Budapest combines old and new, East and West with vibrant and inviting grace. Made up of two parts—Buda, on the east side of the river, and Pest, on the west—the city offers dazzling architecture, welcoming cafés and startling reminders of both recent and long-ago history.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      location: "Budapest",
      days: 3,
      title: "Budapest Pre-Cruise Extension",
      price: "From R 16 000 per person (for 2 guests)",
      desc:
        "Bisected by the Danube, Budapest combines old and new, East and West with vibrant and inviting grace. Made up of two parts—Buda, on the east side of the river, and Pest, on the west—the city offers dazzling architecture, welcoming cafés and startling reminders of both recent and long-ago history.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  post: [
    {
      location: "Vienna",
      days: 2,
      title: "Vienna Post-Cruise Extension",
      price: "From R 12 000 per person (for 2 guests)",
      desc:
        "Vienna, Austria's capital, is known for its artistic and intellectual legacy shaped by residents including Mozart, Beethoven and Sigmund Freud.",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default function TripExtensions() {
  const [tab, setTab] = useState("pre");
  const extensions = EXTENSIONS[tab];

  return (
    <div className="w-4/5 py-12 px-12">
      <div className="mb-6">
        <h2 className="text-3xl font-arpona font-bold text-gray-900 mb-2">Trip extensions</h2>
        <div className="font-bold text-sm font-inter mb-2 max-w-2xl">
          Extension may not be offered on all departure dates—please check with our Reservations team for availability. Please see our {" "}
          <a href="#" className="underline">Terms & Conditions</a> for additional considerations.
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2">
          {EXTENSION_TABS.map((t) => (
            <button
              key={t.key}
              className={`px-8 py-4 text-xs font-inter font-bold uppercase transition ${tab === t.key ? "bg-[#f5f6f7] text-gray-900" : " bg-white text-gray-500 hover:text-gray-900"}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      <div className="bg-[#f5f6f7] px-6 py-4 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          {extensions.map((ext, idx) => (
            <div key={idx} className="bg-white rounded shadow overflow-hidden flex flex-col">
              <div className="relative">
              <div className="relative w-full h-56">
                <img src={ext.img} alt={ext.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              </div>
                <div className="absolute top-3 left-3 text-white font-bold text-xs font-inter px-3 py-1 flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {ext.location}
                </div>
                <div className="absolute top-3 right-3 text-white text-xs font-inter px-3 py-1 ">
                  {ext.days} days
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xl font-arpona font-bold text-gray-900 mb-1">{ext.title}</div>
                <div className="text-gray-600 font-inter text-sm mb-2">{ext.price}</div>
                <hr className="my-2 border-gray-300" />
                <div className="text-gray-700 font-inter text-sm mb-6 flex-1">{ext.desc}</div>
                <button className="mt-auto px-6 py-2 text-xs border border-gray-300 font-inter font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition w-full justify-between">
                  INCLUSIONS & EXCLUSIONS <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
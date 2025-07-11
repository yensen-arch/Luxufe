import { Send } from 'lucide-react';

export default function ChatWidget() {
  return (
    <div className="w-full font-inter font-bold">
      <div className="bg-white flex items-center p-2 shadow-sm border">
        {/* Avatar and Text */}
        <div className="flex items-center gap-2 pl-2 pr-4 border-r border-gray-300">
          <img
            src="https://i.pravatar.cc/48?u=albert"
            alt="Albert"
            className="w-12 h-12 rounded-full"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-800">Hi, I’m Alfred</p>
            <p className="text-xs text-gray-500">How can I help?</p>
          </div>
        </div>
        

        {/* Input and Suggestions */}
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Type Something..."
            className="w-full text-sm border-none outline-none placeholder-gray-400"
          />
          <div className="flex gap-2 mt-2 flex-wrap">
            {["Luxury hotels in Paris", "Caribbean Cruises for July", "Exclusive Villas in Italy for families"].map((label, idx) => (
              <button
                key={idx}
                className="bg-gray-100 text-gray-400 text-xs rounded-full px-3 py-1 hover:bg-gray-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Send Button */}
        <button className="mr-2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700">
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

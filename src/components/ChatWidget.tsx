import { Send } from 'lucide-react';

export default function ChatWidget() {
  return (
    <div className="w-full">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center gap-4">
        <div className="flex-shrink-0 flex flex-col items-center w-24 text-center">
          <img 
            src="https://i.pravatar.cc/48?u=albert" 
            alt="Albert" 
            className="w-12 h-12 rounded-full mb-1"
          />
          <p className="font-bold text-sm text-gray-800">Hi, I'm Albert</p>
          <p className="text-xs text-gray-600">How can I help?</p>
        </div>
        <div className="flex-1 text-left">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Type Something..." 
              className="w-full border-0 bg-transparent focus:ring-0 text-gray-800 placeholder-gray-500"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2 flex flex-wrap gap-2">
            <button className="text-xs bg-gray-100/80 text-gray-600 rounded-full px-3 py-1 hover:bg-gray-200">
              Luxury hotels in Paris
            </button>
            <button className="text-xs bg-gray-100/80 text-gray-600 rounded-full px-3 py-1 hover:bg-gray-200">
              Caribbean Cruises for July
            </button>
            <button className="text-xs bg-gray-100/80 text-gray-600 rounded-full px-3 py-1 hover:bg-gray-200">
              Exclusive Villas in Italy for families
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
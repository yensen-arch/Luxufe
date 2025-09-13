"use client";
import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import { getRoomsForHotel } from "@/lib/database";

interface Room {
  id: number;
  room_name: string;
  first_image: string;
}

interface RoomSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
  onRoomSelect: (roomName: string) => void;
}

export default function RoomSelectionModal({ 
  isOpen, 
  onClose, 
  hotelName, 
  onRoomSelect 
}: RoomSelectionModalProps) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);

  const roomsPerPage = 12;

  // Fetch rooms for the hotel
  useEffect(() => {
    const fetchRooms = async () => {
      if (!isOpen || !hotelName) return;

      setLoading(true);
      try {
        const result = await getRoomsForHotel(hotelName, currentPage, roomsPerPage);
        setRooms(result.data);
        setTotalCount(result.count);
        setTotalPages(Math.ceil(result.count / roomsPerPage));
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setRooms([]);
        setTotalCount(0);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [isOpen, hotelName, currentPage]);

  // Filter rooms based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter(room =>
        room.room_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRooms(filtered);
    }
  }, [rooms, searchTerm]);

  const handleRoomClick = (roomName: string) => {
    onRoomSelect(roomName);
    // Don't call onClose() here - let the parent handle the view transition
  };

  const handleSearch = () => {
    // Search is handled by the useEffect above
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative max-w-6xl max-h-[90vh] bg-white overflow-hidden shadow-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-arpona font-bold text-gray-900">
              Select Room - {hotelName}
            </h3>
            <p className="text-gray-600 font-inter text-sm mt-1">
              Choose a room to manage its images
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-sm font-inter font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 transition-colors rounded-full"
              type="button"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-3 shadow-sm">
            <input
              type="text"
              placeholder="Search rooms by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 bg-transparent outline-none text-sm font-inter text-gray-700 placeholder:text-gray-400"
            />
            <button 
              onClick={handleSearch}
              className="ml-2 bg-[#23263a] text-white rounded-full p-2 flex items-center justify-center hover:bg-black transition"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A5C8CE] mx-auto mb-4"></div>
                <p className="text-gray-600 font-inter">Loading rooms...</p>
              </div>
            </div>
          ) : filteredRooms.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <p className="text-gray-600 font-inter text-lg mb-2">No rooms found</p>
                <p className="text-gray-500 font-inter text-sm">
                  {searchTerm ? 'Try adjusting your search term' : 'No rooms available for this hotel'}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-4">
                <p className="text-sm font-inter font-bold text-gray-500">
                  Showing {filteredRooms.length} of {totalCount} rooms
                </p>
              </div>

              {/* Room Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => handleRoomClick(room.room_name)}
                    className="bg-white border border-gray-200  overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:border-[#A5C8CE]"
                  >
                    {/* Room Image */}
                    <div className="h-32 w-full relative">
                      {room.first_image ? (
                        <img
                          src={room.first_image}
                          alt={room.room_name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">No image</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Room Name */}
                    <div className="p-3">
                      <h4 className="text-sm font-arpona font-bold text-gray-800 line-clamp-2">
                        {room.room_name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`font-inter text-sm transition ${
                        currentPage === 1 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      &lt; Previous
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`flex flex-col items-center ${
                              pageNum === currentPage ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            <span className={`font-inter text-sm ${pageNum === currentPage ? 'font-medium' : ''}`}>
                              {pageNum.toString().padStart(2, '0')}
                            </span>
                            {pageNum === currentPage && (
                              <div className="w-full h-0.5 bg-gray-500 mt-1"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    
                    <button 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`font-inter text-sm transition ${
                        currentPage === totalPages 
                          ? 'text-gray-300 cursor-not-allowed' 
                          : 'text-gray-800 hover:text-gray-600'
                      }`}
                    >
                      Next &gt;
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

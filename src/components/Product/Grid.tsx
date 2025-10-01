"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import RoomModal from "./RoomModal";
import { Hotel } from "@/lib/database";
import { getRoomsByHotel, getRoomGallery } from "@/lib/database";

interface ProductGridProps {
  hotel: Hotel;
}

interface RoomData {
  id: string;
  room_name: string;
  accommodation_type: string;
  bed: string | null;
  image: string;
}

interface CompleteRoomData {
  id: string;
  room_name: string;
  accommodation_type: string;
  amenities: string;
  description: string;
  features: string;
  room_size?: string | null;
  occupancy?: string | null;
  bed?: string | null;
  bath?: string | null;
  view?: string | null;
  floors?: string | null;
  hotel_name: string;
}

const ProductGrid = ({ hotel }: ProductGridProps) => {
  const [rooms, setRooms] = useState<RoomData[]>([]);
  const [completeRooms, setCompleteRooms] = useState<CompleteRoomData[]>([]);
  const [roomImages, setRoomImages] = useState<{ [roomId: string]: string[] }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<CompleteRoomData | null>(null);
  const [selectedRoomImages, setSelectedRoomImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        // Fetch complete room data for the hotel
        const roomsData = await getRoomsByHotel(hotel.hotel_name);

        // Fetch gallery images for each room
        const roomsWithImages = await Promise.all(
          roomsData.map(async (room) => {
            const galleryImages = await getRoomGallery(room.room_name, hotel.hotel_name);
            return {
              id: room.id,
              room_name: room.room_name,
              accommodation_type: room.accommodation_type,
              bed: room.bed,
              image: galleryImages.length > 0 
                ? galleryImages[0] 
                : "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80"
            };
          })
        );

        // Store complete room data for modal
        const completeRoomsData = roomsData.map(room => ({
          id: room.id,
          room_name: room.room_name,
          accommodation_type: room.accommodation_type,
          amenities: room.amenities || "",
          description: room.description || "",
          features: room.features || "",
          room_size: room.room_size,
          occupancy: room.occupancy,
          bed: room.bed,
          bath: room.bath,
          view: room.view,
          floors: room.floors,
          hotel_name: room.hotel_name
        }));

        // Store all images for each room
        const imagesMap: { [roomId: string]: string[] } = {};
        for (const room of roomsData) {
          const galleryImages = await getRoomGallery(room.room_name, hotel.hotel_name);
          imagesMap[room.id] = galleryImages.length > 0 
            ? galleryImages 
            : ["https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80"];
        }

        setRooms(roomsWithImages);
        setCompleteRooms(completeRoomsData);
        setRoomImages(imagesMap);
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setRooms([]);
        setCompleteRooms([]);
        setRoomImages({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, [hotel.hotel_name]);

  const handleRoomClick = async (roomId: string) => {
    const room = completeRooms.find(r => r.id === roomId);
    if (room) {
      // Use stored images for the selected room
      const images = roomImages[roomId] || [];
      setSelectedRoom(room);
      setSelectedRoomImages(images);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    setSelectedRoomImages([]);
  };

  // Skeleton component for loading state
  const RoomSkeleton = () => (
    <div className="max-w-8xl relative rounded-none overflow-hidden shadow-lg h-[500px] bg-gray-200 animate-pulse">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mb-4"></div>
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded w-24"></div>
            <div className="h-4 bg-gray-400 rounded w-32"></div>
          </div>
          <div className="h-8 w-20 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="w-full max-w-8xl mx-auto px-4 md:px-8 py-10">
        <h2 className="text-5xl text-center text-slate-700 font-arpona font-bold mb-14">Rooms & Suites</h2>
        
        {isLoading ? (
          // Show skeletons while loading
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[...Array(6)].map((_, i) => <RoomSkeleton key={i} />)}
          </div>
        ) : rooms.length > 0 ? (
          // Show actual rooms
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {rooms.map((room) => {
              // Get stored images for this room
              const images = roomImages[room.id] || [];
              return (
                <div key={room.id} onClick={() => handleRoomClick(room.id)} className="cursor-pointer">
                  <ProductCard 
                    name={room.room_name}
                    type={room.accommodation_type}
                    bed={room.bed}
                    image={room.image}
                    images={images}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          // Show fallback if no rooms found
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No rooms available for this hotel.</p>
          </div>
        )}
        
        <div className="flex justify-center mb-10">
          <button className="text-gray-500 font-inter font-semibold text-xs px-6 py-2 bg-transparent border-none hover:underline tracking-widest">LOAD MORE +</button>
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          images={selectedRoomImages}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProductGrid; 
import React from "react";
import HotelSidebar from "@/components/hotels/HotelSidebar";
import HotelGrid from "@/components/hotels/HotelGrid";

const HotelsMain = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <HotelSidebar />
      <HotelGrid />
    </div>
  );
};

export default HotelsMain; 
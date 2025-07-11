import React from "react";
import OffersFilterSidebar from "@/components/offers-and-promos/OffersFilterSidebar";
import OffersGrid from "@/components/offers-and-promos/OffersGrid";

const OffersAndPromosMain = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <OffersFilterSidebar />
      <OffersGrid />
    </div>
  );
};

export default OffersAndPromosMain; 
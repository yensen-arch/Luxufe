import React from "react";
import BrandSidebar from "@/components/brand/BrandSidebar";
import BrandGrid from "@/components/brand/BrandGrid";

const BrandMain = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <BrandSidebar />
      <BrandGrid />
    </div>
  );
};

export default BrandMain; 
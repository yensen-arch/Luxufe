import React from "react";
import BrandSidebar from "@/components/brand/BrandSidebar";
import BrandGrid from "@/components/brand/BrandGrid";

interface BrandMainProps {
  data?: {
    heading?: string;
    description?: string;
    content?: any[];
  };
}

const BrandMain = ({ data }: BrandMainProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <BrandSidebar data={data} />
      <BrandGrid data={data} />
    </div>
  );
};

export default BrandMain; 
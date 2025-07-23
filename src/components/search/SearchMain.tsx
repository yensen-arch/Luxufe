import React from "react";
import SearchSidebar from "@/components/search/SearchSidebar";
import SearchGrid from "@/components/search/SearchGrid";

const SearchMain = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SearchSidebar />
      <SearchGrid />
    </div>
  );
};

export default SearchMain; 
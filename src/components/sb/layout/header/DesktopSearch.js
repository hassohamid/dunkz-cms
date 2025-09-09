"use client";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSearch } from "@/hooks/useSearch";
import SearchDropdown from "./SearchDropdown";

export default function DesktopSearch() {
  const { searchQuery, setSearchQuery, results, showResults, setShowResults } =
    useSearch();
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (showResults) {
        setShowResults(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showResults]);

  return (
    <div className="hidden md:block relative ml-6" ref={searchRef}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-white pl-10 rounded-md py-1.5 pr-1.5 text-sm text-gray-500 outline-0"
      />

      <SearchDropdown
        results={results}
        showResults={showResults}
        onClose={() => setShowResults(false)}
      />
    </div>
  );
}

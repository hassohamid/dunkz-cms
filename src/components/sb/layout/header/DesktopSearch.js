"use client";
import { Search } from "lucide-react";

export default function DesktopSearch() {
  return (
    <div className="hidden md:block relative ml-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="search"
        className="bg-white pl-10 rounded-md py-1.5 pr-1.5 text-sm text-gray-500 outline-0"
      />
    </div>
  );
}

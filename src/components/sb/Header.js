"use client";
import { storyblokEditable } from "@storyblok/react";
import MenuItem from "./MenuItem";
import PromoBanner from "./PromoBanner";
import { Search, ShoppingBag } from "lucide-react";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="border-b ">
      {/* Promo Banner */}
      {blok.promo_banner?.[0] && <PromoBanner blok={blok.promo_banner[0]} />}

      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto   ">
        {/* Left side: Logo + Website Name */}
        <div className="flex items-center gap-2">
          {blok.logo?.filename && (
            <img src={blok.logo.filename} alt="Logo" className="h-8" />
          )}
          {blok.website_name?.[0] && (
            <span className="font-semibold text-lg">
              {blok.website_name[0].text}
            </span>
          )}
          {/* Menu */}
          <nav className="flex gap-8 ml-6 font-medium">
            {blok.menu?.map((item) => (
              <MenuItem blok={item} key={item._uid} />
            ))}
          </nav>

          {/* Search */}
          {blok.search_enabled && (
            <div className="relative ml-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-200 bg-white pl-10 rounded-md py-1.5 text-sm text-gray-500"
              />
            </div>
          )}
        </div>

        {/* Right side: Shopping Bag  - no actual func */}
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          <span className="text-sm">3</span>
        </div>
      </div>
    </header>
  );
}

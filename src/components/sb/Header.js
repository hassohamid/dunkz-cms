"use client";
import { storyblokEditable } from "@storyblok/react";
import MenuItem from "./MenuItem";
import PromoBanner from "./PromoBanner";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="border-b border-border ">
      {/* Promo Banner */}
      {blok.promo_banner?.[0] && <PromoBanner blok={blok.promo_banner[0]} />}

      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Left side: Logo + Website Name */}
        <div className="flex items-center gap-2">
          {blok.logo?.filename && (
            <img
              src={blok.logo.filename}
              alt={blok.logo.alt}
              className="h-8 w-8 rounded-lg object-cover object-center"
            />
          )}
          {blok.website_name?.[0] && (
            <span className="font-bold text-lg">
              {blok.website_name[0].text}
            </span>
          )}

          {/* Desktop Menu - Hidden on mobile */}
          <nav className="hidden md:flex gap-8 ml-6 ">
            {blok.menu?.map((item) => (
              <MenuItem blok={item} key={item._uid} />
            ))}
          </nav>

          {/* Desktop Search - Hidden on mobile */}
          {blok.search_enabled && (
            <div className="hidden md:block relative ml-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-white pl-10 rounded-md py-1.5 pr-1.5 text-sm text-gray-500 outline-0 "
              />
            </div>
          )}
        </div>

        {/* Right side: Shopping Bag + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Shopping Bag */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-sm">3</span>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-6">
              <div className="flex flex-col gap-8 mt-8">
                {/* Mobile Search */}
                {blok.search_enabled && (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full bg-white pl-10 rounded-md py-3 text-sm text-gray-500 border border-gray-200 "
                    />
                  </div>
                )}

                {/* Mobile Menu Items */}
                <nav className="flex flex-col gap-6">
                  {blok.menu?.map((item) => (
                    <div key={item._uid} className="py-2">
                      <MenuItem blok={item} />
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

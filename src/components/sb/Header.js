"use client";
import { storyblokEditable } from "@storyblok/react";
import MenuItem from "./MenuItem";
import PromoBanner from "./PromoBanner";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="border-b">
      {/* Promo Banner */}
      {blok.promo_banner?.[0] && <PromoBanner blok={blok.promo_banner[0]} />}

      <div className="p-4 flex justify-between items-center">
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
        </div>

        {/* Menu */}
        <nav className="flex gap-4">
          {blok.menu?.map((item) => (
            <MenuItem blok={item} key={item._uid} />
          ))}
        </nav>

        {/* Search */}
        {blok.search_enabled && (
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-2 py-1"
          />
        )}
      </div>
    </header>
  );
}

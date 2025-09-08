"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Filter({ blok, isActive, onClick }) {
  return (
    <button
      {...storyblokEditable(blok)}
      onClick={() => onClick(blok.label)}
      className={`px-4 py-2 text-sm font-light lowercase border rounded-full transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-black text-white border-black"
          : "text-gray-600 border-gray-200 bg-white hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50"
      }`}
    >
      {blok.label}
    </button>
  );
}

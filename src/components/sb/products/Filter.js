"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Filter({ blok }) {
  return (
    <button
      {...storyblokEditable(blok)}
      className="px-4 py-2 text-sm font-light lowercase text-gray-600 border border-gray-200 rounded-full hover:border-gray-400 hover:text-gray-900 transition-all duration-200 bg-white hover:bg-gray-50 cursor-pointer"
    >
      {blok.label}
    </button>
  );
}

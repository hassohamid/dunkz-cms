"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Filter({ blok }) {
  return (
    <span
      {...storyblokEditable(blok)}
      className="px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 text-sm"
    >
      {blok.label}
    </span>
  );
}

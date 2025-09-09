"use client";
import { storyblokEditable } from "@storyblok/react";

export default function PromoBanner({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full text-center text-sm py-2 tracking-tight font-semibold"
      style={{
        backgroundColor: blok.background_color || "#000000",
        color: blok.text_color || "#ffffff",
      }}
    >
      <span>{blok.text}</span>
    </div>
  );
}

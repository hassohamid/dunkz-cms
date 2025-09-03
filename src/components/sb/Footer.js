"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterColumn from "./FooterColumn";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="p-6 bg-gray-100 mt-12">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {blok.columns?.map((col) => (
          <FooterColumn blok={col} key={col._uid} />
        ))}
      </div>
    </footer>
  );
}

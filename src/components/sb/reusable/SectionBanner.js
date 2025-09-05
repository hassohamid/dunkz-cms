"use client";
import { storyblokEditable } from "@storyblok/react";

export default function SectionBanner({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="w-full">
      {blok.image?.filename ? (
        <div className="w-full h-60 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={blok.image.filename}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-60 md:h-80 lg:h-96  flex items-center justify-center">
          <p className="text-gray-500">Add a banner image</p>
        </div>
      )}
    </section>
  );
}

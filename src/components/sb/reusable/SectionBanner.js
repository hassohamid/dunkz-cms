"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function SectionBanner({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="w-full">
      {blok.image?.filename ? (
        <div className="relative w-full h-60 md:h-80 lg:h-140   overflow-hidden">
          <Image
            src={blok.image.filename}
            fill
            className="object-cover"
            sizes="100vw"
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

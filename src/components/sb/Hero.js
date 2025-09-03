"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className=" flex flex-col items-center justify-center text-center py-16 max-w-7xl mx-auto"
    >
      {/* Text content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 tracking-tight  bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent ">
          {blok.title}
        </h1>
        <p className="text-lg text-gray-700 tracking-tighter">
          {blok.description}
        </p>
      </div>

      {/* Background image */}
      {blok.background_image?.filename && (
        <img
          src={blok.background_image.filename}
          alt={blok.title || "Hero background"}
          className=" h-fit lg:  object-cover mt-7  "
        />
      )}
    </section>
  );
}

"use client";
import { storyblokEditable } from "@storyblok/react";
import CTA from "./CTA";
import Reviews from "./Reviews";

export default function Hero({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className=" flex flex-col items-center justify-center text-center py-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Text content */}

      <h1 className="text-4xl font-bold mb-4 tracking-tight  bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent text-balance ">
        {blok.title}
      </h1>
      <p className="text-lg text-gray-700 tracking-tighter text-balance">
        {blok.description}
      </p>

      {blok.click_to_action?.[0] && <CTA blok={blok.click_to_action[0]} />}

      {/* Background image */}
      {blok.background_image?.filename && (
        <img
          src={blok.background_image.filename}
          alt={blok.title || "Hero background"}
          className=" h-fit lg:  object-cover mt-7   "
        />
      )}
      {/* Reviews Marquee */}
      {blok.reviews?.[0] && <Reviews blok={blok.reviews[0]} />}
    </section>
  );
}

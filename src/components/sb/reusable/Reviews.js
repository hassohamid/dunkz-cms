"use client";
import { storyblokEditable } from "@storyblok/react";
import { Marquee } from "@/components/magicui/marquee";
import Review from "./Review";
import { Heart } from "lucide-react";

export default function Reviews({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="pt-15 md:py-20 max-w-7xl mx-auto"
    >
      {blok.headline && (
        <div className="w-full bg-white p-8 flex items-center justify-center mb-12  md:border-l-green-400 md:border-l-7 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto relative">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extralight tracking-[0.2em] text-center text-black antialiased uppercase">
            {blok.headline}
          </h2>

          <Heart className="absolute top-2 right-8 w-4 h-4 md:w-6 md:h-6 text-lime-400 rotate-12 fill-current" />
        </div>
      )}
      <div className="relative">
        <Marquee pauseOnHover repeat={10} className="">
          {blok.reviews?.map((review) => (
            <Review key={review._uid} blok={review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}

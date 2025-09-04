"use client";
import { storyblokEditable } from "@storyblok/react";
import { Marquee } from "@/components/magicui/marquee";
import Review from "./Review";

export default function Reviews({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="py-20 relative ">
      <Marquee pauseOnHover>
        {blok.reviews?.map((review) => (
          <Review key={review._uid} blok={review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

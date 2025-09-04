"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Review({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className=" p-6  rounded-lg  border-2 border-dotted  "
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={blok.img?.filename || "https://avatar.vercel.sh/default"}
          alt={blok.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-sm">{blok.name}</div>
          <div className="text-gray-500 text-sm">{blok.username}</div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed text-center">
        {blok.body}
      </p>
    </div>
  );
}

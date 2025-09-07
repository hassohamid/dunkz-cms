"use client";
import { storyblokEditable } from "@storyblok/react";
import { Star } from "lucide-react";

export default function Review({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-100  max-w-xs mx-3 group"
    >
      {/* Header with avatar and info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img
            src={blok.img?.filename || "https://avatar.vercel.sh/default"}
            alt={blok.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-gray-200 transition-all"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 text-sm truncate">
            {blok.name}
          </div>
          <div className="text-gray-500 text-xs truncate">{blok.username}</div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 drop-shadow-sm ${
              i < blok.rating ? "text-slate-800 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed font-medium">
        "{blok.body}"
      </p>
    </div>
  );
}

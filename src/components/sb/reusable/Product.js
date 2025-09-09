"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ blok, showBadge = false }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={`/products/${blok.slug}`}
      className="group block "
    >
      {/* Image container */}
      <div className="relative aspect-square mb-3 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
        {/* Badge */}
        {showBadge && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full font-light">
              {blok.badge_text}
            </span>
          </div>
        )}

        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.name || "product"}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        )}
      </div>

      {/* Product info - clean without badge */}
      <div className="space-y-1">
        {blok.name && (
          <h3 className="text-sm md:text-base font-bold lowercase leading-tight">
            {blok.name}
          </h3>
        )}
        {blok.price && (
          <p className="text-sm md:text-base font-normal tracking-tight">
            ${blok.price}
          </p>
        )}
      </div>
    </Link>
  );
}

"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ blok }) {
  console.log("Product blok data:", blok);

  return (
    <Link
      {...storyblokEditable(blok)}
      href={`/products/${blok.slug}`}
      className="group block "
    >
      {/* Image container */}
      <div className="relative aspect-square mb-3 overflow-hidden bg-transparent rounded-lg">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.name || "product"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product info */}
      <div className="space-y-1">
        {blok.name && (
          <h3 className="text-sm md:text-base font-bold lowercase leading-tight  ">
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

"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Product({ blok }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link?.url || "#"}
      className="group block"
    >
      <div className="bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
        {blok.image?.filename && (
          <img
            src={blok.image.filename}
            alt={blok.name || "Product"}
            className="object-cover"
          />
        )}
      </div>

      {blok.name && <h3 className="mt-3 text-sm  font-bold">{blok.name}</h3>}

      {blok.price && (
        <p className="mt-1 text-sm text-gray-700 tracking-tight font-medium">
          {blok.price}
        </p>
      )}
    </Link>
  );
}

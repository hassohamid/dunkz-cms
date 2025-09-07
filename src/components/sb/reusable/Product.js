"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ blok }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.link?.url || "#"}
      className="group block"
    >
      <div className="relative bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity w-full h-48 md:h-76">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.name || "Product"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

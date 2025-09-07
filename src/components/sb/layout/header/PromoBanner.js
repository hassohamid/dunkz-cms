"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function PromoBanner({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="w-full text-center text-sm py-2 text-white tracking-tight font-semibold bg-black"
    >
      {blok.link?.url ? (
        <Link href={blok.link.url} className="underline">
          {blok.text}
        </Link>
      ) : (
        <span>{blok.text}</span>
      )}
    </div>
  );
}

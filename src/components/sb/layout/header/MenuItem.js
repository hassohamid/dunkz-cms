"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function MenuItem({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative group tracking-tight font-medium text-primary"
    >
      <Link
        href={blok.url?.cached_url}
        className="hover:text-primary/80 transition-colors"
      >
        {blok.label}
      </Link>

      {/* for the dropdown incase we create */}
      {blok.children?.length > 0 && (
        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded  p-2">
          {blok.children.map((child) => (
            <MenuItem blok={child} key={child._uid} />
          ))}
        </div>
      )}
    </div>
  );
}

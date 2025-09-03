"use client";
import { storyblokEditable } from "@storyblok/react";

export default function MenuItem({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative group tracking-tight font-medium  text-primary"
    >
      <a
        href={blok.link?.url || "#"}
        className="hover:text-primary/80 transition-colors"
      >
        {blok.label}
      </a>

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

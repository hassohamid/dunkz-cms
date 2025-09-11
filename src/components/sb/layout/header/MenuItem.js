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
        href={`/${blok.url?.cached_url?.replace(/^\/+/, "")}`} // fix navigation issue /prod/prod etc
        className="hover:text-primary/80 transition-colors"
      >
        {blok.label}
      </Link>

      {/* for the dropdown incase we create */}
      {blok.children?.length > 0 && (
        <div
          className="
      absolute left-0 top-full z-50 pt-3
      invisible opacity-0 -translate-y-1 pointer-events-none
      transition-all duration-200 ease-out
      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
    "
        >
          <div
            className="
        min-w-[18rem] rounded-2xl border border-zinc-100 bg-white/90
        backdrop-blur shadow-xl ring-1 ring-black/5
      "
          >
            <div className="p-2 space-y-1">
              {blok.children.map((child) => (
                <div
                  key={child._uid}
                  className="rounded-xl px-3 py-2 hover:bg-zinc-50"
                >
                  <MenuItem blok={child} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

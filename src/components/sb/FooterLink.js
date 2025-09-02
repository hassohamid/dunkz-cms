"use client";
import { storyblokEditable } from "@storyblok/react";

export default function FooterLink({ blok }) {
  return (
    <a
      {...storyblokEditable(blok)}
      href={blok.url?.url || "#"}
      className="text-sm text-gray-600 hover:underline"
    >
      {blok.label}
    </a>
  );
}

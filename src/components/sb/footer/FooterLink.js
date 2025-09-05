"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function FooterLink({ blok }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.url?.url || "#"}
      className="text-muted/70  hover:text-gray-500 transition-colors tracking-tight block"
    >
      {blok.label}
    </Link>
  );
}

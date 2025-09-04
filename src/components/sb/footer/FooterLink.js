"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function FooterLink({ blok }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.url?.url || "#"}
      className="text-muted-foreground  hover:text-gray-900 transition-colors tracking-tight block"
    >
      {blok.label}
    </Link>
  );
}

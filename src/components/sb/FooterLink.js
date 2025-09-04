"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function FooterLink({ blok }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      href={blok.url?.url || "#"}
      className="text-sm text-gray-600 hover:underline"
    >
      {blok.label}
    </Link>
  );
}

"use client";

import { storyblokEditable } from "@storyblok/react";
import { Button as ShadcnButton } from "@/components/ui/button";
import Link from "next/link";

export default function CTA({ blok }) {
  return (
    <div className="flex items-center justify-center pb-5">
      <ShadcnButton
        {...storyblokEditable(blok)}
        asChild
        className="mt-5 py-6 text-md tracking-tight px-12 rounded-xs font-light "
        variant={blok.variant || "default"}
      >
        <Link href={blok.link?.cached_url}>{blok.label}</Link>
      </ShadcnButton>
    </div>
  );
}

"use client";

import { storyblokEditable } from "@storyblok/react";
import { Button as ShadcnButton } from "@/components/ui/button";

export default function CTA({ blok }) {
  return (
    <ShadcnButton
      {...storyblokEditable(blok)}
      asChild
      className="mt-5 py-6 text-md tracking-tight px-12 rounded-xs "
      variant={blok.variant || "default"}
    >
      <a href={blok.link?.url || "#"}>{blok.label}</a>
    </ShadcnButton>
  );
}

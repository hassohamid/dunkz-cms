"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterLink from "./FooterLink";

export default function FooterColumn({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h3 className="font-semibold text-gray-900 mb-4 text-lg">{blok.title}</h3>
      <ul className="space-y-3">
        {blok.links?.map((link) => (
          <li key={link._uid}>
            <FooterLink blok={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

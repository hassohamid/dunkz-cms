"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterLink from "./FooterLink";

export default function FooterColumn({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h4 className="font-semibold mb-2">{blok.title}</h4>
      <ul className="space-y-1">
        {blok.links?.map((link) => (
          <li key={link._uid}>
            <FooterLink blok={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

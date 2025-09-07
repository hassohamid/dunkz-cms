"use client";
import { storyblokEditable } from "@storyblok/react";
import FooterLink from "./FooterLink";

export default function FooterColumn({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h3 className="font-bold text-white mb-6 tracking-tight text-md">
        {blok.title}
      </h3>
      <ul className="space-y-2 ">
        {blok.links?.map((link) => (
          <li key={link._uid}>
            <FooterLink blok={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

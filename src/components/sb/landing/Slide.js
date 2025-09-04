"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Slide({ blok }) {
  return <img {...storyblokEditable(blok)} src={blok.image?.filename} alt="" />;
}

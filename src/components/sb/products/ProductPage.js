"use client";
import { storyblokEditable } from "@storyblok/react";
import CTA from "../reusable/CTA";

export default function ProductPage({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="max-w-5xl mx-auto py-12 grid md:grid-cols-2 gap-10"
    >
      {/* Image */}
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.name}
          className="w-full object-cover rounded-md"
        />
      )}

      {/* Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{blok.name}</h1>
        <p className="text-xl text-gray-700 mb-4">${blok.price}</p>
        {blok.description && (
          <p className="text-gray-600 mb-6">{blok.description}</p>
        )}
        {blok.cta?.[0] && <CTA blok={blok.cta[0]} />}
      </div>
    </section>
  );
}

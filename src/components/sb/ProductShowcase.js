"use client";
import { storyblokEditable } from "@storyblok/react";
import Product from "./Product";
import CTA from "./CTA";

export default function ProductShowcase({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {blok.title && (
            <h2 className="text-6xl tracking-tight  font-bold text-gray-900 mb-2">
              {blok.title}
            </h2>
          )}

          {blok.description && (
            <p className="text-lg text-balance tracking-tight text-primary mx-auto ">
              {blok.description}
            </p>
          )}
          {blok.cta?.[0] && <CTA blok={blok.cta[0]} />}
        </div>

        {/* Products Grid */}
        {blok.products?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {blok.products.map((product) => (
              <Product key={product._uid} blok={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

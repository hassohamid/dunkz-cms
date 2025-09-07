"use client";
import { storyblokEditable } from "@storyblok/react";
import Product from "../reusable/Product";

export default function ProductGrid({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-12 max-w-7xl mx-auto">
      {blok.header && (
        <h1 className="text-3xl font-bold mb-6 text-center">{blok.header}</h1>
      )}
      {blok.description && (
        <p className="text-center text-gray-600 mb-10">{blok.description}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blok.products?.map((product) => (
          <Product blok={product} key={product._uid} />
        ))}
      </div>
    </section>
  );
}

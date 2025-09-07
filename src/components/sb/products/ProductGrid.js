"use client";
import { storyblokEditable } from "@storyblok/react";
import Filter from "./Filter";
import Product from "../reusable/Product";

export default function ProductGrid({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-12 max-w-7xl mx-auto">
      {/* Header */}
      {blok.header && (
        <h1 className="text-3xl font-bold mb-2 text-center">{blok.header}</h1>
      )}
      {blok.description && (
        <p className="text-center text-gray-600 mb-8">{blok.description}</p>
      )}

      {/* Filter bar */}
      {blok.filters?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {blok.filters.map((filter) => (
            <Filter blok={filter} key={filter._uid} />
          ))}
        </div>
      )}

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blok.products?.map((product) => (
          <Product blok={product} key={product._uid} />
        ))}
      </div>
    </section>
  );
}

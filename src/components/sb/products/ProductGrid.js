"use client";
import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import Filter from "./Filter";
import Product from "../reusable/Product";
import { HyperText } from "@/components/magicui/hyper-text";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function ProductGrid({ blok }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const getTypewriterWords = (text) => {
    if (!text) return [];
    return text.split("  ").map((word) => ({
      text: word,
      className: "text-lg text-gray-600 lowercase font-light",
    }));
  };

  // Filter products based on active filter
  const filteredProducts =
    blok.products?.filter((product) => {
      if (activeFilter === "all") return true;
      return product.category === activeFilter;
    }) || [];

  return (
    <section {...storyblokEditable(blok)} className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        {blok.header && (
          <div className="text-center mb-12">
            <HyperText
              animateOnHover={false}
              className="lowercase tracking-tighter text-shadow-amber-400 text-shadow-2xs"
            >
              {blok.header}
            </HyperText>
            {blok.description && (
              <TypewriterEffectSmooth
                words={getTypewriterWords(blok.description)}
                cursorClassName="hidden"
              />
            )}
          </div>
        )}

        {/* Filter bar */}
        {blok.filters?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 pb-8 border-b border-gray-100">
            {/* All filter */}
            <Filter
              blok={{ label: "all" }}
              isActive={activeFilter === "all"}
              onClick={setActiveFilter}
            />

            {/* Dynamic filters */}
            {blok.filters.map((filter) => (
              <Filter
                blok={filter}
                key={filter._uid}
                isActive={activeFilter === filter.label}
                onClick={setActiveFilter}
              />
            ))}
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <Product blok={product} key={product._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}

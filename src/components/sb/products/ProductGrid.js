"use client";
import { storyblokEditable } from "@storyblok/react";
import Filter from "./Filter";
import Product from "../reusable/Product";
import { HyperText } from "@/components/magicui/hyper-text";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function ProductGrid({ blok }) {
  const getTypewriterWords = (text) => {
    if (!text) return [];
    return text.split("   ").map((word) => ({
      text: word,
    }));
  };

  return (
    <section {...storyblokEditable(blok)} className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        {blok.header && (
          <div className="text-center mb-12">
            <HyperText
              animateOnHover={false}
              className="lowercase tracking-tighter  text-shadow-amber-400 text-shadow-2xs"
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
            {blok.filters.map((filter) => (
              <Filter blok={filter} key={filter._uid} />
            ))}
          </div>
        )}

        {/* Product grid - 2 cols on mobile, responsive up */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {blok.products?.map((product) => (
            <Product blok={product} key={product._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}

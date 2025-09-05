"use client";
import { storyblokEditable } from "@storyblok/react";
import SectionBanner from "../reusable/SectionBanner";
import ProductShowcase from "../landing/ProductShowcase";

export default function About({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="min-h-screen">
      {/* Hero Section with Title & Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {blok.title && (
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              {blok.title}
            </h1>
          )}

          {blok.description && (
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              {blok.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section Banner */}
      {blok.section_banner?.[0] && (
        <SectionBanner blok={blok.section_banner[0]} />
      )}

      {/* Product Showcase */}
      {blok.product_showcase?.[0] && (
        <ProductShowcase blok={blok.product_showcase[0]} />
      )}
    </div>
  );
}

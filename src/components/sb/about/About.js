"use client";
import { storyblokEditable } from "@storyblok/react";
import SectionBanner from "../reusable/SectionBanner";
import ProductShowcase from "../landing/ProductShowcase";

export default function About({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {/* Hero Section with Title & Description */}
      <section className="py-20 bg-white ">
        <div className=" text-center">
          {blok.title && (
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              {blok.title}
            </h1>
          )}
          {blok.description && (
            <p className="text-lg max-w-5xl mx-auto text-muted-foreground tracking-tighter leading-relaxed text-balance">
              {blok.description}
            </p>
          )}

          {blok.subheadline && (
            <div className=" w-full mt-15">
              <h1 className="text-4xl md:text-6xl font-thin tracking-widest   mb-8 mt-10  ">
                {blok.subheadline}
              </h1>
            </div>
          )}
          {blok.subdescription && (
            <div className="md:text-sm space-y-6 tracking-tighter text-center max-w-lg mx-auto text-xs border-t border-b py-3 text-balance px-15 md:px-0  ">
              {blok.subdescription.split("\n\n").map((paragraph) => (
                <p className="  ">{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Showcase */}
      {blok.product_showcase?.[0] && (
        <ProductShowcase blok={blok.product_showcase[0]} />
      )}
      {/* Section Banner */}
      {blok.section_banner?.[0] && (
        <SectionBanner blok={blok.section_banner[0]} />
      )}
    </div>
  );
}

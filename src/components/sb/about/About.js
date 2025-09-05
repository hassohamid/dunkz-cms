"use client";
import { storyblokEditable } from "@storyblok/react";
import SectionBanner from "../reusable/SectionBanner";
import ProductShowcase from "../landing/ProductShowcase";

export default function About({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {/* Hero Section with Title & Description */}
      <section className="py-20 bg-white  ">
        <div className=" text-center">
          {blok.title && (
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              {blok.title}
            </h1>
          )}
          {blok.description && (
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground tracking-tighter leading-relaxed text-balance">
              {blok.description}
            </p>
          )}

          {blok.subheadline && (
            <div className=" mt-15">
              <h1 className="text-4xl md:text-5xl font-thin text-primary/40 border-t max-w-xs md:max-w-xl pt-5 mx-auto tracking-widest mb-8 mt-10  ">
                {blok.subheadline}
              </h1>
            </div>
          )}
          {blok.subdescription && (
            <div className="md:text-sm max-w-xs md:max-w-xl mx-auto text-left leading-relaxed space-y-5 tracking-tighter  text-xs border-b pb-10   ">
              {blok.subdescription.split("\n\n").map((paragraph) => (
                <p>{paragraph}</p>
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

"use client";
import { storyblokEditable } from "@storyblok/react";
import CTA from "../reusable/CTA";
import Image from "next/image";

export default function ProductPage({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="max-w-5xl mx-auto py-12 px-4 md:px-0 grid md:grid-cols-2 gap-6 md:gap-10"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.name || "product"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Info */}
      <div className="space-y-4 md:space-y-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold lowercase mb-2 tracking-tight">
            {blok.name}
          </h1>
          <p className="text-lg md:text-xl tracking-tight">${blok.price}</p>
        </div>

        {blok.description && (
          <p className="text-muted-foreground lowercase text-balance tracking-tight border-t border-b p-2 md:p-3 text-sm md:text-base">
            {blok.description}
          </p>
        )}

        {/* Sizes */}
        {blok.sizes?.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2 md:mb-3 lowercase">size</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {blok.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-3 py-1.5 md:px-4 md:py-2 border border-gray-300 border-dashed rounded-md text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fit Guide */}
        {blok.fit_guide_text && (
          <div>
            <p className="text-xs md:text-sm font-medium lowercase mb-1 underline">
              {blok.fit_guide_text}
            </p>
            {blok.fit_guide_description && (
              <p className="text-xs md:text-sm text-gray-500 lowercase">
                {blok.fit_guide_description}
              </p>
            )}
          </div>
        )}

        {blok.cta?.[0] && <CTA blok={blok.cta[0]} />}
      </div>
    </section>
  );
}

"use client";
import { storyblokEditable } from "@storyblok/react";

export default function Press({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Text with Lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-6 text-sm font-light text-muted-foreground tracking-widest">
            {blok.title}
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {blok.logos?.map((logoBlock) => (
            <div
              key={logoBlock._uid}
              className="flex items-center justify-center h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logoBlock.logos?.filename}
                className="max-h-full max-w-full object-contain filter contrast-0 hover:contrast-100 transition-all duration-300 size-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

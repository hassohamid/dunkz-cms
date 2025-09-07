"use client";
import { storyblokEditable } from "@storyblok/react";
import CTA from "../reusable/CTA";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Hero({ blok }) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <section
      {...storyblokEditable(blok)}
      className=" flex flex-col items-center justify-center text-center py-9 md:py-15 max-w-7xl mx-auto overflow-hidden "
    >
      {/* Text content */}

      <h1 className=" text-4xl md:text-7xl font-black mb-4 tracking-tight  bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent text-balance ">
        {blok.title}
      </h1>
      <p className="text-md sm:text-lg text-gray-700 tracking-tighter text-balance font-medium ">
        {blok.description}
      </p>

      {blok.click_to_action?.[0] && <CTA blok={blok.click_to_action[0]} />}

      {/* Carousel for slides */}
      {blok.slides?.length > 0 && (
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {blok.slides.map((slide) => (
              <CarouselItem key={slide._uid}>
                {slide.image?.filename && (
                  <div className="relative w-full h-96 md:h-[500px]">
                    <Image
                      src={slide.image.filename}
                      alt="Hero slide"
                      fill
                      className="object-cover"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                        maskComposite: "intersect",
                        WebkitMaskComposite: "intersect",
                      }}
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
}

"use client";
import { storyblokEditable } from "@storyblok/react";
import CTA from "./CTA";
import Reviews from "./Reviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero({ blok }) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <section
      {...storyblokEditable(blok)}
      className=" flex flex-col items-center justify-center text-center py-9 md:py-15 max-w-7xl mx-auto overflow-hidden "
    >
      {/* Text content */}

      <h1 className=" text-4xl md:text-7xl font-bold mb-4 tracking-tight  bg-gradient-to-br from-neutral-950 from-20% to-neutral-500 bg-clip-text text-transparent text-balance ">
        {blok.title}
      </h1>
      <p className="text-md sm:text-lg text-gray-700 tracking-tighter text-balance ">
        {blok.description}
      </p>

      {blok.click_to_action?.[0] && <CTA blok={blok.click_to_action[0]} />}

      {/* Carousel for slides */}
      {blok.slides?.length > 0 && (
        <Carousel plugins={[plugin.current]} className="mt-5">
          <CarouselContent>
            {blok.slides.map((slide) => (
              <CarouselItem key={slide._uid}>
                {slide.image?.filename && (
                  <img
                    src={slide.image.filename}
                    alt="Hero slide"
                    className="w-full h-full object-cover"
                    style={{
                      maskImage:
                        "radial-gradient(ellipse 80% 70% at center, black 40%, transparent 70%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 80% 70% at center, black 40%, transparent 70%)",
                    }}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
      {/* Reviews Marquee */}
      {blok.reviews?.[0] && <Reviews blok={blok.reviews[0]} />}
    </section>
  );
}

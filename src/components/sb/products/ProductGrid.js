"use client";
import { storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import { getStoryblokApi } from "@/lib/storyblok";
import Filter from "./Filter";
import Product from "../reusable/Product";
import { HyperText } from "@/components/magicui/hyper-text";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function ProductGrid({ blok }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState([]);

  const getTypewriterWords = (text) =>
    text?.split("  ").map((word) => ({
      text: word,
      className: "text-lg text-gray-600 lowercase font-light",
    })) || [];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getStoryblokApi().get("cdn/stories", {
          starts_with: "products/",
          version: "published",
          per_page: 25,
        });

        const productStories = data.stories
          .filter((story) => story.slug !== "products")
          .map((story) => ({
            ...story.content,
            _uid: story.uuid,
            slug: story.slug,
          }));

        setProducts(productStories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => activeFilter === "all" || product.category === activeFilter
  );

  return (
    <section {...storyblokEditable(blok)} className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        {blok.filters?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 pb-8 border-b border-gray-100">
            <Filter
              blok={{ label: "all" }}
              isActive={activeFilter === "all"}
              onClick={setActiveFilter}
            />
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <Product
              blok={product}
              key={product._uid}
              showBadge={true}
              badgeText={blok.badge_text}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center pt-32">
            <p className="text-lg tracking-tighter text-muted-foreground  lowercase">
              no products found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

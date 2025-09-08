"use client";
import { storyblokEditable } from "@storyblok/react";
import PromoBanner from "./PromoBanner";
import { Search, ShoppingBag, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ blok }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // If scrolling DOWN and past 100px → HIDE navbar
        setIsVisible(false);
      } else {
        // If scrolling UP → SHOW navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Remember current position
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <header
      {...storyblokEditable(blok)}
      className={`border-b border-border sticky top-0 z-50 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Promo Banner */}
      {blok.promo_banner?.[0] && <PromoBanner blok={blok.promo_banner[0]} />}

      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Left side: Logo + Website Name */}
        <div className="flex items-center gap-2">
          {blok.logo?.filename && (
            <div className="relative h-8 w-8">
              <Image
                src={blok.logo.filename}
                alt={blok.logo.alt || "Logo"}
                fill
                className="rounded-lg object-cover object-center"
                sizes="32px"
              />
            </div>
          )}
          {blok.website_name?.[0] && (
            <Link href="/" className="font-bold text-lg">
              {blok.website_name[0].text}
            </Link>
          )}

          {/* Desktop Menu - Hidden on mobile */}
          <nav className="hidden md:flex gap-8 ml-6">
            {blok.menu?.map((item) => (
              <MenuItem blok={item} key={item._uid} />
            ))}
          </nav>

          {/* Desktop Search - Hidden on mobile */}
          {blok.search_enabled && (
            <div className="hidden md:block relative ml-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="search"
                className="bg-white pl-10 rounded-md py-1.5 pr-1.5 text-sm text-gray-500 outline-0"
              />
            </div>
          )}
        </div>

        {/* Right side: Shopping Bag + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Shopping Bag */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-sm">3</span>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-55 p-2">
              <div className="flex flex-col gap-8 mt-8">
                {/* Mobile Search */}
                {blok.search_enabled && (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full bg-white pl-10 rounded-md py-3 text-sm text-gray-500 outline-none"
                    />
                  </div>
                )}

                {/* Mobile Menu Items */}
                <nav className="flex flex-col justify-center min-h-[60vh]">
                  <h1 className="tracking-widest text-muted-foreground/40 mb-5">
                    navigate;
                  </h1>
                  {blok.menu?.map((item) => (
                    <div
                      key={item._uid}
                      className="text-xl py-2 border-b w-full"
                    >
                      <SheetClose asChild>
                        <Link
                          href={item.url?.cached_url}
                          className="hover:text-primary/80 transition-colors block"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

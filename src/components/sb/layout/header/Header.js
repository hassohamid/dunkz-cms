"use client";
import { storyblokEditable } from "@storyblok/react";
import PromoBanner from "./PromoBanner";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import DesktopSearch from "./DesktopSearch";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

export default function Header({ blok }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        {/* Left side: Logo + Website Name + Desktop Nav + Desktop Search */}
        <div className="flex items-center gap-2">
          <Logo blok={blok} />
          <DesktopNav menu={blok?.menu} />
          {blok.search_enabled && <DesktopSearch />}
        </div>

        {/* Right side: Shopping Bag + Mobile Menu */}
        <div className="flex items-center gap-4">
          {blok.show_cart && <CartButton />}
          <MobileMenu blok={blok} />
        </div>
      </div>
    </header>
  );
}

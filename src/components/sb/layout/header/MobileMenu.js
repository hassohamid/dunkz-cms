"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileMenu({ blok }) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-55 p-2">
        <div className="flex flex-col gap-8 mt-8">
          {/* Mobile Menu Items */}
          <nav className="flex flex-col justify-center min-h-[60vh]">
            <h1 className="tracking-widest text-muted-foreground/40 mb-5">
              navigate;
            </h1>
            {blok.menu?.map((item) => (
              <div key={item._uid} className="text-xl py-2 border-b w-full">
                <SheetClose asChild>
                  <Link
                    href={`/${item.url?.cached_url?.replace(/^\/+/, "") || ""}`}
                    className="hover:text-primary/70 transition-colors tracking-tight text-primary/90 block"
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
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ blok }) {
  return (
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
    </div>
  );
}

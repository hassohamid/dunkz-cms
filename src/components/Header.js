import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="p-4 bg-gray-10">
      <nav>
        <ul className="flex gap-4">
            {blok.links?.map.((link) => (
                <li key={link._uid}>
                    <Link href={link.url.cached.url}>{link.label}</Link>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

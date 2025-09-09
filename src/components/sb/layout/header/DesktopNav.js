"use client";
import MenuItem from "./MenuItem";

export default function DesktopNav({ menu }) {
  return (
    <nav className="hidden md:flex gap-8 ml-6">
      {menu?.map((item) => (
        <MenuItem blok={item} key={item._uid} />
      ))}
    </nav>
  );
}

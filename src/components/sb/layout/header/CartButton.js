"use client";
import { ShoppingBag } from "lucide-react";

export default function CartButton() {
  return (
    <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
      <ShoppingBag size={20} />
    </button>
  );
}
